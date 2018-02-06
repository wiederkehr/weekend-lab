import classNames from 'classnames'

export class Champion extends React.PureComponent {
  constructor(props) {
    super(props)
    const career = this.findCareer(props.series)
    this.state = {
      hover: false,
      positions: {
        positionX: props.xScale(props.champion.Year),
        positionY: props.yScale(props.champion.Rank),
      },
      colors: {
        ageColor: props.ageScale(props.champion.Age),
        sexColor: props.sexScale(props.champion.Sex),
      },
      sizes: {
        normalSize: 3,
        careerSize: props.careerScale(career.length),
        racesSize: props.racesScale(props.champion.Races),
      }
    }
  }
  onMouseOver = (e) => {
    this.props.onMouseOver(e.target)
    this.setState({hover: true})
    return
  }
  onMouseOut = () => {
    this.props.onMouseOut()
    this.setState({hover: false})
    return
  }
  findCareer = (series) => {
    const career = series.filter((s) => {
      return s.Name === this.props.champion.Name
    })
    if(career.length > 0) {
      return career[0].Years
    }else{
      return []
    }
  }
  getColor = (view) => {
    switch(view) {
      case 1:
        return 'DARKOLIVEGREEN'
      break
      case 2:
        return this.state.colors.sexColor
      break
      case 3:
        return this.state.colors.ageColor
      break
      case 4:
        return 'REBECCAPURPLE'
      break
      case 5:
        return 'FIREBRICK'
      break
      case 6:
        return 'ORANGERED'
      break
      default:
        return 'TEAL'
      break
    }
  }
  getSizes = (view) => {
    switch(view) {
      case 1:
        return {
          point: this.state.sizes.normalSize,
          value: this.state.sizes.normalSize
        }
      break
      case 2:
        return {
          point: this.state.sizes.normalSize,
          value: this.state.sizes.normalSize
        }
      break
      case 3:
        return {
          point: this.state.sizes.normalSize,
          value: this.state.sizes.normalSize
        }
      break
      case 4:
        return {
          point: 1,
          value: this.state.sizes.racesSize
        }
      break
      case 5:
        return {
          point: 1,
          value: this.state.sizes.careerSize
        }
      break
      case 6:
        return {
          point: this.state.sizes.normalSize,
          value: this.state.sizes.normalSize
        }
      break
      default:
        return {
          point: this.state.sizes.normalSize,
          value: this.state.sizes.normalSize
        }
      break
    }
  }
  render = () => {

    const color = this.getColor(this.props.view)
    const sizes = this.getSizes(this.props.view)

    const targetCircleProps = {
      'data-name': this.props.champion.Name,
      'data-rank': this.props.champion.Rank,
      'data-year': this.props.champion.Year,
      'data-age': this.props.champion.Age,
      'data-sex': this.props.champion.Sex,
      'data-x': this.state.positions.positionX,
      'data-y': this.state.positions.positionY,
      onMouseOver: this.onMouseOver,
      onMouseOut: this.onMouseOut,
      className: 'Circle__Target'
    }
    const pointCircleProps = {
      style: { fill: color, r: sizes.point },
      className: classNames({
        'Circle__Point': true,
        'Circle__Point--hover': this.state.hover
      })
    }
    const hoverCircleProps = {
      style: { fill: color },
      className: classNames({
        'Circle__Hover': true,
        'Circle__Hover--hover': this.state.hover
      })
    }
    const sizeCircleProps = {
      style: { fill: color, r: sizes.value },
      className: classNames({
        'Circle__Size': true,
        'Circle__Size--hover': this.state.hover
      })
    }
    const groupProps = {
      transform: `translate(${this.state.positions.positionX},${this.state.positions.positionY})`
    }
    return (
      <g {...groupProps} >
        <circle {...hoverCircleProps} />
        <circle {...sizeCircleProps} />
        <circle {...pointCircleProps} />
        <circle {...targetCircleProps} />
        <style jsx>{`
          .Circle__Target {
            cursor: pointer;
            fill: transparent;
            r: 8;
          }
          .Circle__Point {
            transition: fill 2000ms ease-in-out, r 2000ms ease-in-out;
          }
          .Circle__Size {
            opacity: 0.4;
            transition: fill 2000ms ease-in-out, r 2000ms ease-in-out;
          }
          .Circle__Hover {
            opacity: 0.4;
            r: 0;
            transition: fill 2000ms ease-in-out, r 200ms ease-in-out;
          }
          .Circle__Hover.Circle__Hover--hover {
            r: 12;
          }
        `}</style>
      </g>
    )
  }
}
