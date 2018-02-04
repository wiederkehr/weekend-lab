import PropTypes from 'prop-types'
import { map, nest, max, min, scaleLinear, scaleOrdinal, scalePoint, interpolateHcl } from 'd3'
import { XRay } from '../Utilities/XRay'
import { Champions } from './Champions'
import { Careers } from './Careers'
import { Axes } from '../Axis/Axes'

export class Rankings extends React.PureComponent {
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
      ageMax: max(props.data, (d) => d.Age),
      racesMin: min(props.data, (d) => d.Races),
      racesMax: max(props.data, (d) => d.Races),
    }
    const dimensions = this.calculateDimensions(props, margins)
    const scales = this.calculateScales(props, extents, dimensions)
    const series = this.deriveSeries(props.data)
    this.state = {
      margins: margins,
      extents: extents,
      dimensions: dimensions,
      scales: scales,
      series: series,
    }
  }
  calculateDimensions(props, margins) {
    return {
      width: props.width - margins.left - margins.right,
      height: props.height - margins.top - margins.bottom
    }
  }
  calculateScales(props, extents, dimensions) {
    const yearScale = scalePoint()
      .domain(extents.years)
      .range([0, dimensions.width])
    const rankScale = scaleLinear()
      .domain([extents.rankMin, extents.rankMax])
      .range([0, dimensions.height])
    const ageScale = scaleLinear()
      .domain([extents.ageMin, extents.ageMax])
      .range(['lightcoral', 'midnightblue'])
      .interpolate(interpolateHcl)
    const sexScale = scaleOrdinal()
      .domain(extents.sexes)
      .range(['midnightblue', 'lightcoral'])
    const racesScale = scaleLinear()
      .domain([extents.racesMin, extents.racesMax])
      .range([2, yearScale.step() / 2])
    return {
      yearScale: yearScale,
      rankScale: rankScale,
      ageScale: ageScale,
      sexScale: sexScale,
      racesScale: racesScale,
    }
  }
  deriveSeries(data) {
    let series = nest()
      .key(d => d.Name)
      .rollup(v => v.map((d,i) => ({ Year: d.Year, Rank: d.Rank, Sex: d.Sex })))
      .entries(data)
      .map(d => ({ Name: d.key, Years: d.value, Sex: d.value[0].Sex }))
      .filter(d => d.Years.length > 1)
    console.log(series)
    return series
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.width !== nextProps.width) {
      const dimensions = this.calculateDimensions(nextProps, this.state.margins)
      const scales = this.calculateScales(nextProps, this.state.extents, dimensions)
      this.setState({
        dimensions: dimensions,
        scales: scales
      })
    }
  }
  render() {
    console.log('Render Rankings!')
    const axesProps = {
      height: this.state.dimensions.height,
      width: this.state.dimensions.width,
      xScale: this.state.scales.yearScale,
      yScale: this.state.scales.rankScale
    }
    const championsProps = {
      view: this.props.view,
      data: this.props.data,
      xScale: this.state.scales.yearScale,
      yScale: this.state.scales.rankScale,
      ageScale: this.state.scales.ageScale,
      sexScale: this.state.scales.sexScale,
      racesScale: this.state.scales.racesScale,
      onMouseOut: this.props.onMouseOut,
      onMouseOver: this.props.onMouseOver
    }
    const careersProps = {
      view: this.props.view,
      data: this.state.series,
      xScale: this.state.scales.yearScale,
      yScale: this.state.scales.rankScale,
    }
    return (
      <div className='Champions'>
        <XRay {...this.props}/>
        <svg
          width={this.state.dimensions.width + this.state.margins.left + this.state.margins.right}
          height={this.state.dimensions.height + this.state.margins.top + this.state.margins.bottom}>
          <g transform={`translate(${this.state.margins.left}, ${this.state.margins.top})`}>
            <Axes {...axesProps} />
            <Champions {...championsProps} />
            <Careers {...careersProps} />
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

Rankings.propTypes = {
  data: PropTypes.array.isRequired,
  view: PropTypes.number.isRequired
}
