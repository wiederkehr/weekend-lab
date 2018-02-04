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
        flex-grow: 1;
        flex-shrink: 0;
        height: 100vh;
        position: sticky;
        right: 0;
        top: 0;
        width: 60%;
        z-index: 20;
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
        height: 80vh;
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
        z-index: 10;
      }
      `}
    </style>
  </div>
)

export class ScrollyView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: props.view,
      active: false
    }
    this.onWaypointEnter = this.onWaypointEnter.bind(this)
    this.onWaypointLeave = this.onWaypointLeave.bind(this)
  }
  onWaypointEnter() {
    this.props.onViewEnter(this.state.view)
    this.setState({ active: true })
  }
  onWaypointLeave() {
    this.setState({ active: false })
  }
  render() {
    return (
      <Waypoint
        onEnter={this.onWaypointEnter}
        onLeave={this.onWaypointLeave}
        topOffset='49.999%'
        bottomOffset='50%'>
        <div>
          {this.props.children}
        </div>
      </Waypoint>
    )
  }
}
