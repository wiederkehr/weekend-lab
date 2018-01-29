import { nest, sum } from 'd3'
import { XRay } from '../Utilities/XRay'

export class Champions extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='Champions'>
        <XRay {...this.props}/>
        <style jsx>{`
          .Champions {
            background: var(--grey-4);
            height: 50vh;
            position: relative;
          }
          `}
        </style>
      </div>
    )
  }
}
