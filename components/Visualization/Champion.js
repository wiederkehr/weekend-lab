import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

export class Champion extends React.PureComponent {
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
    return
  }
  onMouseOut = () => {
    this.props.onMouseOut()
    this.setState({active: false})
    return
  }
  render = () => {

    let color = null
    let sort = null

    switch(this.props.view) {
      case 'A':
        color = 'DARKOLIVEGREEN'
      break
      case 'B':
        color = this.state.colors.sexColor
      break
      case 'C':
        color = this.state.colors.ageColor
      break
      case 'D':
        color = 'REBECCAPURPLE'
      break
      case 'E':
        color = 'ORANGERED'
      break
      default:
        color = 'TEAL'
      break
    }

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
        'Circle__Center--active': this.state.active
      })
    }
    const backCircleProps = {
      style: { fill: color },
      className: classNames({
        'Circle__Back': true,
        'Circle__Back--active': this.state.active
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
            transition: fill 200ms;
          }
          .Circle__Back {
            opacity: 0.4;
            r: 2;
            transition: fill 200ms, r 200ms;
          }
          .Circle__Back.Circle__Back--active {
            r: 12;
          }
        `}</style>
      </g>
    )
  }
}
