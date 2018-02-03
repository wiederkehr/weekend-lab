import Link from 'next/link'
import { csv } from 'd3'
import { LineChart, Line } from 'recharts'
import { App } from '../components/App/App'
import { Layout } from '../components/Layout/Layout'
import { Head } from '../components/Head/Head'
import { Page, PageHeader, PageBody } from '../components/Page/Page'
import { Section, SectionHeader, SectionBody } from '../components/Section/Section'
import { GenderBalance } from '../components/Analysis/GenderBalance'
import { RacingYears } from '../components/Analysis/RacingYears'
import { RankingOverTime } from '../components/Analysis/RankingOverTime'
import { RankingOverSeason } from '../components/Analysis/RankingOverSeason'

const countryNames = {
  IE: 'Ireland',
  IU: 'Ireland or United Kingdom',
  UK: 'United Kingdom'
}

export default class Analysis extends React.Component {
  constructor(props) {
    super(props)
    this.state = { rankings: null }
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

  render() {
    return (
      <App>
        <Head title='Greyhound Race Analysis' />
        <Page>
          <PageHeader title='Greyhound Race Analysis' />
          <PageBody>
            <Section title='Gender Balance'>
              <GenderBalance data={this.state.rankings} />
            </Section>
            <Section title='Racing Years'>
              <RacingYears data={this.state.rankings} />
            </Section>
            <Section title='Ranking Over Time'>
              <RankingOverTime data={this.state.rankings} />
            </Section>
            <Section title='Ranking Over Season'>
              <RankingOverSeason data={this.state.rankings} />
            </Section>
          </PageBody>
        </Page>
      </App>
    )
  }
}
