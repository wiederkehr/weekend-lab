import Link from 'next/link'
import ContainerDimensions from 'react-container-dimensions'
import { csv } from 'd3'
import { App } from '../components/App/App'
import { Layout } from '../components/Layout/Layout'
import { Head } from '../components/Head/Head'
import { Page, PageHeader, PageBody, PageFooter } from '../components/Page/Page'
import { Section } from '../components/Section/Section'
import { Tooltip } from '../components/Tooltip/Tooltip'
import { Scroller, Sticky, StickyGraphic, StickyRuler, Scrolly, ScrollyView } from '../components/Scroller/Scroller'
import { ChampionsChart } from '../components/Visualizations/ChampionsChart'

const countryNames = {
  IE: 'Ireland',
  IU: 'Ireland or United Kingdom',
  UK: 'United Kingdom'
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { rankings: false, view: 'A', tooltip: null, hovered: null }
    this.onViewEnter = this.onViewEnter.bind(this)
    this.showTooltip = this.showTooltip.bind(this)
    this.hideTooltip = this.hideTooltip.bind(this)
  }
  componentWillMount() {
    this.loadData()
  }
  loadData() {
    csv('./static/greyhound-data-1.3.csv')
    .row((row) => (
      {
        Gold: parseInt(row['1st']),
        Silver: parseInt(row['2nd']),
        Bronze: parseInt(row['3rd']),
        Birthland: countryNames[row.Birthland],
        Birthyear: parseInt(row.Birthyear),
        Dam: row.Dam,
        Link: row.Link,
        Name: row.Name,
        Races: parseInt(row.Races),
        Rank: parseInt(row.Rank),
        Sex: row.Sex,
        Sire: row.Sire,
        Standingland: countryNames[row.Standingland],
        WinDistance: parseInt(row.WinDistance.replace(' m', '')),
        WinPercent: parseInt(row.WinPercent.replace('%', '')),
        Wins: parseInt(row.Wins),
        Year: parseInt(row.Year),
        Age: parseInt(row.Year - row.Birthyear)
      }
    ))
    .get((data) => {
      this.setState({ rankings: data })
    })
  }
  onViewEnter(view) {
    this.setState({ view: view })
  }
  showTooltip(e) {
    const tooltip = {
      id: e.target.getAttribute('data-id'),
      name: e.target.getAttribute('data-name'),
      rank: e.target.getAttribute('data-rank'),
      sex: e.target.getAttribute('data-sex'),
      age: e.target.getAttribute('data-age'),
      left: e.target.getAttribute('data-x') + "px",
      top: e.target.getAttribute('data-y') + "px"
    }
    this.setState({ tooltip: tooltip, hovered: tooltip.id })
  }
  hideTooltip() {
    this.setState({ tooltip: null, hovered: null })
  }
  render() {

    const chartProps = {
      view: this.state.view,
      data: this.state.rankings,
      hovered: this.state.hovered,
      onMouseOver: this.showTooltip,
      onMouseOut: this.hideTooltip
    }
    return (
      <App>
        <Head title='Derby Champions' />
        <Page>
          <PageHeader title='Derby Champions' />
          <PageBody>
            <Scroller>
              <StickyRuler top='50%' />
              <Sticky>
                <StickyGraphic>
                  <ContainerDimensions>
                    {this.state.rankings ? <ChampionsChart {...chartProps} /> : <Loader text='Loading…' />}
                  </ContainerDimensions>
                  { this.state.tooltip ? <Tooltip {...this.state.tooltip}></Tooltip> : null }
                </StickyGraphic>
              </Sticky>
              <Scrolly>
                <ScrollyView view='A' onViewEnter={this.onViewEnter}>
                  <Section title='A: All Dogs, All Races'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Section>
                </ScrollyView>
                <ScrollyView view='B' onViewEnter={this.onViewEnter}>
                  <Section title='B: Gender Balance'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Section>
                </ScrollyView>
                <ScrollyView view='C' onViewEnter={this.onViewEnter}>
                  <Section title='C: Age Distribution'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Section>
                </ScrollyView>
                <ScrollyView view='D' onViewEnter={this.onViewEnter}>
                  <Section title='D: Repeated Winners'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Section>
                </ScrollyView>
                <ScrollyView view='E' onViewEnter={this.onViewEnter}>
                  <Section title='E: Parents & Kids'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Section>
                </ScrollyView>
              </Scrolly>
            </Scroller>
          </PageBody>
          <PageFooter>
            © 2018 Anna & Benjamin
          </PageFooter>
        </Page>
      </App>
    )
  }
}

export const Loader = (props) => (
  <div className='Loader'>
    <p>{props.text}</p>
  </div>
)
