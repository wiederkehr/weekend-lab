import { select, axisBottom, axisLeft } from 'd3'

export class Axis extends React.Component {
  componentDidUpdate() {
    this.renderAxis()
  }

  componentDidMount() {
    this.renderAxis()
  }

  renderAxis() {
    var node = this.refs.axis
    var axis = null
    switch(this.props.orient) {
      case 'bottom':
        axis = axisBottom()
          .ticks(this.props.ticks ? this.props.ticks : 10)
          .tickSize(this.props.tickSize)
          .tickPadding(10)
          .scale(this.props.scale)
        break
      case 'left':
        axis = axisLeft()
          .ticks(this.props.ticks ? this.props.ticks : 10)
          .tickSize(this.props.tickSize)
          .tickPadding(10)
          .scale(this.props.scale)
        break
      default:
        axis = null
        break
    }
    select(node).call(axis)
  }

  render() {
    return (
      <g className="axis" ref="axis" transform={this.props.translate}>
        <style jsx>{`
          :global(.axis > path) {
            stroke: var(--grey-1);
          }
          :global(.tick > line) {
            stroke: var(--grey-1);
          }
          :global(.tick > text) {
            fill: var(--grey-8);
          }
        `}</style>
      </g>
    )
  }
}
