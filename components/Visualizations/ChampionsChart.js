import PropTypes from 'prop-types'
import { map, nest, scaleLinear, scaleOrdinal, scalePoint, max, min, interpolateHcl } from 'd3'
import { XRay } from '../Utilities/XRay'
import { Spinner } from '../Spinner/Spinner'
import { Champions } from './Champions'
import { Axes } from '../Axis/Axes'

export class ChampionsChart extends React.Component {
  constructor(props) {
    super(props)
    const margins = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 40
    }
    const extents = {
      sexes: map(props.data, (d) => d.Sex).keys(),
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
      yearScale: scalePoint().domain(extents.years).range([0, dimensions.width]),
      rankScale: scaleLinear().domain([0, extents.rankMax]).range([dimensions.height, 0]),
      ageScale: scaleLinear()
        .domain([extents.ageMin, extents.ageMax])
        .range(['lightcoral', 'midnightblue'])
        .interpolate(interpolateHcl),
      sexScale: scaleOrdinal()
        .domain(extents.sexes)
        .range(['midnightblue', 'lightcoral'])

    }
  }
  render() {
    console.log('Render ChampionsChart!')
    return (
      <div className='Champions'>
        <XRay {...this.props}/>
        <svg
          width={this.state.dimensions.width + this.state.margins.left + this.state.margins.right}
          height={this.state.dimensions.height + this.state.margins.top + this.state.margins.bottom}>
          <g transform={`translate(${this.state.margins.left}, ${this.state.margins.top})`}>
            <Axes
              height={this.state.dimensions.height}
              width={this.state.dimensions.width}
              xScale={this.state.scales.yearScale}
              yScale={this.state.scales.rankScale} />
            <Champions
              view={this.props.view}
              data={this.props.data}
              xScale={this.state.scales.yearScale}
              yScale={this.state.scales.rankScale}
              ageScale={this.state.scales.ageScale}
              sexScale={this.state.scales.sexScale}
              hovered={this.props.hovered}
              onMouseOut={this.props.onMouseOut}
              onMouseOver={this.props.onMouseOver} />
          </g>
        </svg>
        <style jsx>{`
          .Champions {
            background: var(--grey-4);
            line-height: 1;
            position: relative;
          }
          `}
        </style>
      </div>
    )
  }
}

ChampionsChart.propTypes = {
  data: PropTypes.array.isRequired,
  view: PropTypes.string.isRequired
}
