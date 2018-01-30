import PropTypes from 'prop-types'
import { map, nest, sum, scaleLinear, scaleOrdinal, scaleBand, max, min, interpolateHcl } from 'd3'
import { XRay } from '../Utilities/XRay'
import { Spinner } from '../Spinner/Spinner'
import { ScatterplotCircles } from '../Scatterplot/ScatterplotCircles'
import { XYAxis } from '../Axis/XYAxis'

export class Champions extends React.Component {
  constructor(props) {
    super(props)
    const margins = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 40
    }
    const extents = {
      years: map(props.data, (d) => d.Year).keys(),
      yearMin: min(props.data, (d) => d.Year),
      yearMax: max(props.data, (d) => d.Year),
      rankMin: min(props.data, (d) => d.Rank),
      rankMax: max(props.data, (d) => d.Rank),
      ageMin: min(props.data, (d) => d.Age),
      ageMax: max(props.data, (d) => d.Age)
    }
    const dimensions = this.calculateDimensions(props, margins)
    const scales = this.calculateScales(props, extents, dimensions)
    this.state = {
      margins: margins,
      extents: extents,
      dimensions: dimensions,
      scales: scales,
    }
  }
  componentWillReceiveProps(props) {
    if(this.props.width !== props.width) {
      const dimensions = this.calculateDimensions(props, this.state.margins)
      const scales = this.calculateScales(props, this.state.extents, dimensions)
      this.setState({
        dimensions: dimensions,
        scales: scales
      })
    }
  }
  calculateDimensions(props, margins) {
    return {
      width: props.width - margins.left - margins.right,
      height: props.height - margins.top - margins.bottom
    }
  }
  calculateScales(props, extents, dimensions) {
    return {
      yearScale: scaleBand().domain(extents.years).range([0, dimensions.width]),
      rankScale: scaleLinear().domain([0, extents.rankMax]).range([dimensions.height, 0]),
      ageScale: scaleLinear()
      .domain([extents.ageMin, extents.ageMax])
      .range(['#FF5555', '#2FBF62'])
      .interpolate(interpolateHcl)
    }
  }
  render() {
    return (
      <div className='Champions'>
        <XRay {...this.props}/>
        <svg
          width={this.state.dimensions.width + this.state.margins.left + this.state.margins.right}
          height={this.state.dimensions.height + this.state.margins.top + this.state.margins.bottom}>
          <g transform={`translate(${this.state.margins.left}, ${this.state.margins.top})`}>
            <XYAxis
              height={this.state.dimensions.height}
              width={this.state.dimensions.width}
              xScale={this.state.scales.yearScale}
              yScale={this.state.scales.rankScale} />
          </g>
          {/* <XYAxis {...props}/>
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
          </text> */}
        </svg>
        <style jsx>{`
          .Champions {
            background: var(--grey-4);
            position: relative;
          }
          .Scatterplot__Label {
            font-size: 12px;
            fill: var(--ixt-dark-grey);
          }
          .Scatterplot__Line {
            stroke: var(--ixt-light-grey);
            fill: none;
            stroke-width: 1;
          }
          `}
        </style>
      </div>
    )
  }
}

Champions.propTypes = {
    data: PropTypes.array.isRequired,
    view: PropTypes.string.isRequired
}
