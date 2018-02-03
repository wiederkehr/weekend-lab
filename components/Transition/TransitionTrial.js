import { map, max, min, scaleLinear, scaleOrdinal, scalePoint, interpolateHcl } from 'd3'
import { Dots } from './Dots'

export class TransitionTrial extends React.Component {
  constructor(props) {
    super(props)
    const margins = { top: 20, right: 20, bottom: 20, left: 20 }
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
  calculateDimensions(props, margins) {
    return {
      width: 500 - margins.left - margins.right,
      height: 500 - margins.top - margins.bottom
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
  render = () => {
    console.log('Render Transition!')
    const dotsProps = {
      view: this.props.view,
      data: this.props.data,
      xScale: this.state.scales.yearScale,
      yScale: this.state.scales.rankScale,
      ageScale: this.state.scales.ageScale,
      sexScale: this.state.scales.sexScale,
    }
    return (
      <div className='Transition'>
        <svg
          width={this.state.dimensions.width + this.state.margins.left + this.state.margins.right}
          height={this.state.dimensions.height + this.state.margins.top + this.state.margins.bottom}>
          <g transform={`translate(${this.state.margins.left}, ${this.state.margins.top})`}>
            <Dots {...dotsProps} />
          </g>
        </svg>
        <style jsx>{`
          .Transition {
            background: var(--grey-1);
            line-height: 1;
            position: relative;
          }
          `}
        </style>
      </div>
    )
  }
}
