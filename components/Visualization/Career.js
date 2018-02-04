import { line } from 'd3'

export class Career extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      path: this.generateCareerPath(props.career),
    }
  }
  generateCareerPath(career) {
    const path = career.Years.map((year) => {
      return [this.props.xScale(year.Year), this.props.yScale(year.Rank)]
    })
    return path
  }
  render = () => {

    const lineGenerator = line()
    const pathString = lineGenerator(this.state.path)

    const lineProps = {
      d: pathString,
      className: 'Line'
    }

    return (
      <g>
        <path {...lineProps} />
        <style jsx>{`
          .Line {
            fill: none;
            opacity: 0.5;
            stroke: var(--grey-8);
            stroke-width: 4px;
          }
        `}</style>
      </g>
    )
  }
}
