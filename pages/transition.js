import { App } from '../components/App/App'
import { Head } from '../components/Head/Head'
import { Page, PageHeader, PageBody, PageSection } from '../components/Page/Page'
import { Example } from '../components/Transition/Example'
import { TransitionTrial } from '../components/Transition/TransitionTrial'

export default class Transition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { Sex: 'f', Year: 1, Rank: 5, Age: 1 },
        { Sex: 'm', Year: 1, Rank: 4, Age: 2 },
        { Sex: 'f', Year: 1, Rank: 3, Age: 3 },
        { Sex: 'm', Year: 1, Rank: 2, Age: 4 },
        { Sex: 'f', Year: 1, Rank: 1, Age: 5 }
      ],
      view: 1
    }
    this.increaseView = this.increaseView.bind(this)
    this.decreaseView = this.decreaseView.bind(this)
  }

  increaseView() {
    this.setState({view: this.state.view + 1})
  }

  decreaseView() {
    this.setState({view: this.state.view - 1})
  }

  render() {
    return (
      <App>
        <Head title='Transition Trial' />
        <Page>
          <PageHeader title='Transition Trial' />
          <PageBody>
            <Example />
            <TransitionTrial data={this.state.data} view={this.state.view} />
            <button onClick={this.decreaseView}>← Previous View</button>
            <span>{this.state.view}</span>
            <button onClick={this.increaseView}>Next View →</button>
          </PageBody>
        </Page>
      </App>
    )
  }
}
