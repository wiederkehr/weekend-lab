import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

export class Champion extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
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
    this.setState({hover: true})
    return
  }
  onMouseOut = () => {
    this.props.onMouseOut()
    this.setState({hover: false})
    return
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
        return 'ORANGERED'
      break
      default:
        return 'TEAL'
      break
    }
  }
  render = () => {

    let color = this.getColor(this.props.view)

    const frontCircleProps = {
      'data-name': this.props.champion.Name,
      'data-rank': this.props.champion.Rank,
      'data-age': this.props.champion.Age,
      'data-sex': this.props.champion.Sex,
      'data-x': this.state.positions.positionX,
      'data-y': this.state.positions.positionY,
      onMouseOver: this.onMouseOver,
      onMouseOut: this.onMouseOut,
      style: { fill: 'transparent' },
      className: 'Circle__Front'
    }
    const centerCircleProps = {
      style: { fill: color },
      className: classNames({
        'Circle__Center': true,
        'Circle__Center--hover': this.state.hover
      })
    }
    const backCircleProps = {
      style: { fill: color },
      className: classNames({
        'Circle__Back': true,
        'Circle__Back--hover': this.state.hover
      })
    }
    const groupProps = {
      transform: `translate(${this.state.positions.positionX},${this.state.positions.positionY})`
    }
    return (
      <g {...groupProps} >
        <circle {...backCircleProps} />
        <circle {...centerCircleProps} />
        <circle {...frontCircleProps} />
        <style jsx>{`
          .Circle__Front {
            r: 8;
            cursor: pointer;
          }
          .Circle__Center {
            r: 2;
          }
          .Circle__Back {
            opacity: 0.4;
            r: 2;
            transition: r 200ms;
          }
          .Circle__Back.Circle__Back--hover {
            r: 12;
          }
        `}</style>
      </g>
    )
  }
}
