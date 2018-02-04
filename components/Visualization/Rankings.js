import PropTypes from 'prop-types'
import { map, nest, max, min, scaleLinear, scaleOrdinal, scalePoint, interpolateHcl } from 'd3'
import { Champions } from './Champions'
import { Careers } from './Careers'
import { Axes } from '../Axis/Axes'

export class Rankings extends React.PureComponent {
  constructor(props) {
    super(props)
    console.log(props.data)
    const series = this.deriveSeries(props.data)
    const sires = this.deriveParents(props.data)
    const margins = {
      top: 20,
      right: 40,
      bottom: 20,
      left: 40
    }
    const extents = {
      sexes: map(props.data, (d) => d.Sex).keys(),
      years: map(props.data, (d) => d.Year).keys(),
      yearsMin: min(series, (s) => s.Years.length),
      yearsMax: max(series, (s) => s.Years.length),
      rankMin: min(props.data, (d) => d.Rank),
      rankMax: max(props.data, (d) => d.Rank),
      ageMin: min(props.data, (d) => d.Age),
      ageMax: max(props.data, (d) => d.Age),
      racesMin: min(props.data, (d) => d.Races),
      racesMax: max(props.data, (d) => d.Races),
    }
    const dimensions = this.calculateDimensions(props, margins)
    const scales = this.calculateScales(props, extents, dimensions)
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
    const careerScale = scaleLinear()
      .domain([0, extents.yearsMax])
      .range([0, yearScale.step() / 2])
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
      careerScale: careerScale,
      rankScale: rankScale,
      ageScale: ageScale,
      sexScale: sexScale,
      racesScale: racesScale,
    }
  }
  deriveSeries(data) {
    const series = nest()
      .key(d => d.Name)
      .rollup(v => v.map((d,i) => ({ Year: d.Year, Rank: d.Rank })))
      .entries(data)
      .map(d => ({ Name: d.key, Years: d.value }))
      .filter(d => d.Years.length > 1)
    return series
  }
  deriveParents(data) {
    const sires = nest()
      .key(d => d.Sire)
      .rollup(v => ({ Children: v.length }))
      .entries(data)
      .map(d => ({ Sire: d.key, Children: d.value.Children }))
      .sort((a, b) => b.Children - a.Children)
      .slice(0,3)

    const dams = nest()
      .key(d => d.Dam)
      .rollup(v => ({ Children: v.length }))
      .entries(data)
      .map(d => ({ Dam: d.key, Children: d.value.Children }))
      .sort((a, b) => b.Children - a.Children)
      .slice(0,3)

    return {Sires: sires, Dams: dams}
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
      yScale: this.state.scales.rankScale,
    }
    const championsProps = {
      view: this.props.view,
      data: this.props.data,
      series: this.state.series,
      xScale: this.state.scales.yearScale,
      yScale: this.state.scales.rankScale,
      ageScale: this.state.scales.ageScale,
      sexScale: this.state.scales.sexScale,
      racesScale: this.state.scales.racesScale,
      careerScale: this.state.scales.careerScale,
      onMouseOut: this.props.onMouseOut,
      onMouseOver: this.props.onMouseOver,
    }
    const careersProps = {
      view: this.props.view,
      data: this.state.series,
      xScale: this.state.scales.yearScale,
      yScale: this.state.scales.rankScale,
    }
    return (
      <div className='Champions'>
        <svg
          width={this.state.dimensions.width + this.state.margins.left + this.state.margins.right}
          height={this.state.dimensions.height + this.state.margins.top + this.state.margins.bottom}>
          <g transform={`translate(${this.state.margins.left}, ${this.state.margins.top})`}>
            <Axes {...axesProps} />
            { this.props.view === 5 ? <Careers {...careersProps} /> : null }
            <Champions {...championsProps} />
          </g>
        </svg>
        <style jsx>{`
          .Champions {
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
