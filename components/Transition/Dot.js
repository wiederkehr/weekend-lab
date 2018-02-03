import { Transition } from 'react-transition-group'

export class Dot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      positions: {
        positionX: props.xScale(props.dot.Year),
        positionY: props.yScale(props.dot.Rank)
      },
      colors: {
        ageColor: props.ageScale(props.dot.Age),
        sexColor: props.sexScale(props.dot.Sex)
      }
    }
  }

  getColor = (view) => {
    switch(view) {
      case 1:
        return 'DARKOLIVEGREEN'
      break
      case 2:
        return 'GOLD'
      break
      case 3:
        return 'CORAL'
      break
      default:
        return 'TEAL'
      break
    }
  }

  getTransitionStyles = (view) => {
    return {
      entered: {
        fill: 'NAVY'
      },
      exited: {
        fill: 'CRIMSON'
      },
    }
  }

  render = () => {

    const color = this.getColor(this.props.view)
    const transitionStyles = this.getTransitionStyles(this.props.view)

    return (
      <Transition in={this.props.in} timeout={0} >
        {(state) => (
          <g
            transform={`translate(${this.state.positions.positionX},${this.state.positions.positionY})`} >
            <circle style={{
              r: 20,
              fill: color,
              transition: 'fill 600ms ease-in-out',
              // ...transitionStyles[state],
            }} />
          </g>
        )}
      </Transition>
    )
  }
}
