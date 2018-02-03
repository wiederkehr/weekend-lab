import { Dot } from './Dot'

export class Dots extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => (
    <g>{ this.props.data.map((d, i) => <Dot dot={d} key={i} {...this.props} />) }</g>
  )
}
