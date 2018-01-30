import Waypoint from 'react-waypoint'

export const Scroller = (props) => (
  <div className='Scroller'>
    {props.children}
    <style jsx>{`
      .Scroller {
        display: flex;
        flex-direction: row-reverse;
      }
      `}
    </style>
  </div>
)
export const Sticky = (props) => (
  <div className='Sticky'>
    {props.children}
    <style jsx>{`
      .Sticky {
        background: var(--grey-2);
        flex-grow: 1;
        flex-shrink: 0;
        height: 100vh;
        position: sticky;
        right: 0;
        top: 0;
        width: 60%;
      }
      `}
    </style>
  </div>
)
export const StickyGraphic = (props) => (
  <div className='StickyGraphic'>
    {props.children}
    <style jsx>{`
      .StickyGraphic {
        height: 50vh;
        min-height: 600px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
      }
      `}
    </style>
  </div>
)
export const StickyRuler = (props) => (
  <div className='StickyRuler'>
    <style jsx>{`
      .StickyRuler {
        border-bottom: 1px dashed hsla(0,100%,0%,0.2);
        height: 1px;
        left: 0px;
        position: fixed;
        top: ${props.top};
        width: 100%;
        z-index: 1000;
      }
      `}
    </style>
  </div>
)
export const Scrolly = (props) => (
  <div className='Scrolly'>
    {props.children}
    <style jsx>{`
      .Scrolly {
        position: relative;
        max-width: 32rem;
      }
      `}
    </style>
  </div>
)

export class ScrollyView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      position: 0
    }
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)
    this.handleWaypointLeave = this.handleWaypointLeave.bind(this)
  }
  handleWaypointEnter() {
    if(this.props.onViewEnter) {
      this.props.onViewEnter(this.props.view)
    }
    this.setState({ visible: true })
  }
  handleWaypointLeave() {
    this.setState({ visible: false })
  }
  render() {
    return (
      <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
          topOffset='49.999%'
          bottomOffset='50%'>
          <div style={{background: this.state.visible ? 'var(--white)' : 'var(--grey-2)'}}>
          {this.props.children}
        </div>
      </Waypoint>
    )
  }
}
