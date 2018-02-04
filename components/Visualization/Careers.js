import { Career } from './Career'

export class Careers extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render = () => {
    return (
      <g className='Careers'>
        { this.props.data.map((d, i) => <Career career={d} key={i} {...this.props} />) }
      </g>
    )
  }
}
