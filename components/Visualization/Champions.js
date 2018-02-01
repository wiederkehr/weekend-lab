import { Champion } from './Champion'

export class Champions extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render = () => (
    <g>{ this.props.data.map((d, i) => <Champion champion={d} key={i} {...this.props} />) }</g>
  )
}
