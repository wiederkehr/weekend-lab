import classNames from 'classnames'

export const Champions = (props) => (
  <g>{ props.data.map((d, i) => <Champion champion={d} key={i} {...props} />) }</g>
)

class Champion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      positions: {
        positionX: props.xScale(props.champion.Year),
        positionY: props.yScale(props.champion.Rank)
      },
      colors: {
        ageColor: props.ageScale(props.champion.Age),
        sexColor: props.sexScale(props.champion.Sex)
      }
    }
  }
  onMouseOver = (e) => {
    this.props.onMouseOver(e.target)
    this.setState({active: true})
    console.log('onMouseOver')
    return
  }
  onMouseOut = (e) => {
    this.props.onMouseOver(e.target)
    this.setState({active: false})
    console.log('onMouseOut')
    return
  }
  render = () => {
    const frontCircleProps = {
      'data-name': this.props.champion.Name,
      'data-rank': this.props.champion.Rank,
      'data-age': this.props.champion.Age,
      'data-sex': this.props.champion.Sex,
      'data-x': this.state.positions.positionX,
      'data-y': this.state.positions.positionY,
      onMouseOver: this.onMouseOver,
      onMouseOut: this.onMouseOut,
      className: 'Circle__Front'
    }
    const centerCircleProps = {
      className: classNames({
        'Circle__Center': true,
        'Circle__Center--active': this.state.active
      })
    }
    const backCircleProps = {
      className: classNames({
        'Circle__Back': true,
        'Circle__Back--active': this.state.active
      })
    }
    const groupProps = {
      transform: `translate(${this.state.positions.positionX},${this.state.positions.positionY})`
    }

    let color = null
    let sort = null

    switch(this.props.view) {
      case 'A':
        color = '#000000'
      break
      case 'B':
        color = this.state.colors.sexColor
      break
      case 'C':
        color = this.state.colors.ageColor
      break
      default:
        color = '#000000'
      break
    }

    return (
      <g {...groupProps} >
        <circle {...backCircleProps} />
        <circle {...centerCircleProps} />
        <circle {...frontCircleProps} />
        <style jsx>{`
          .Circle__Front {
            fill: transparent;
            r: 8;
            cursor: pointer;
          }
          .Circle__Center {
            fill: ${color};
            r: 2;
            transition: color 200ms;
          }
          .Circle__Back {
            fill: ${color};
            opacity: 0.4;
            r: 2;
            transition: r 200ms;
          }
          .Circle__Back.Circle__Back--active {
            r: 8;
          }
        `}</style>
      </g>
    )
  }
}
