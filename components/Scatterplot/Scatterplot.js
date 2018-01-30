import { scaleLinear, max, min, interpolateHcl } from 'd3'
import { ScatterplotCircles } from './ScatterplotCircles'
import { XYAxis } from '../Axis/XYAxis'

export class Scatterplot extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      extents: {
        xMax: max(props.records, (d) => d['Budget Hours']),
        yMax: max(props.records, (d) => d['Tracked Hours']),
        cMax: max(props.records, (d) => d['Budget Hours'] / d['Tracked Hours']),
        cMin: min(props.records, (d) => d['Budget Hours'] / d['Tracked Hours'])
      }
    }
  }

  marshalProps = (props) => {
    const extents = this.state.extents
    const scales = {
      xScale: scaleLinear().domain([0, extents.xMax]).range([props.padding, props.width - props.padding]),
      yScale: scaleLinear().domain([0, extents.yMax]).range([props.height - props.padding, props.padding]),
      cScale: scaleLinear()
              .domain([extents.cMin, 1, extents.cMax])
              .range(['#FF5555', '#00263E', '#2FBF62'])
              .interpolate(interpolateHcl)
    }
    return Object.assign({}, props, scales, extents)
  }

  render() {
    const props = this.marshalProps(this.props)
    return (
      <div className='Scatterplot'>
        <svg width={props.width} height={props.height}>
          <XYAxis {...props}/>
          <line
            className='Scatterplot__Line'
            x1={props.xScale(0)}
            y1={props.yScale(0)}
            x2={props.xScale(props.xMax)}
            y2={props.yScale(props.xMax)}/>
          <ScatterplotCircles {...props}/>
          <text
            className='Scatterplot__Label'
            transform={`translate(10,${this.props.height - this.props.padding}) rotate(-90)`}>
            Bugdet Hours
          </text>
          <text
            className='Scatterplot__Label'
            transform={`translate(${this.props.padding},${this.props.height})`}>
            Tracked Hours
          </text>
          <style jsx>{`
            .Scatterplot__Label {
              font-size: 12px;
              fill: var(--ixt-dark-grey);
            }
            .Scatterplot__Line {
              stroke: var(--ixt-light-grey);
              fill: none;
              stroke-width: 1;
            }
          `}</style>
        </svg>
      </div>
    )
  }
}
