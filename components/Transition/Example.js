import { Transition } from 'react-transition-group'

export class Example extends React.Component {
  state = { show: false }

  handleToggle() {
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleToggle()}>Click to toggle</button>
        <Fade in={!!this.state.show} />
      </div>
    )
  }
}

class Fade extends React.Component {
  render() {

    const transitionStyles = {
      entered: {
        fill: 'NAVY'
      },
      exited: {
        fill: 'CRIMSON'
      },
    }

    return (
      <Transition in={this.props.in} timeout={0} >
        {(state) => (
          <div style={{
            padding: 20,
            backgroundColor: '#eee',
          }}>
            <svg width={500} height={200}>
              <g>
                <circle cx={100} cy={100}
                  style={{
                    r: 100,
                    transition: 'fill 600ms ease-in-out',
                    ...transitionStyles[state],
                  }}
                />
              </g>
            </svg>
          </div>
        )}
      </Transition>
    )
  }
}
