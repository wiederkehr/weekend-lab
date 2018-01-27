import Link from 'next/link'
import { App } from '../components/App/App'
import { Layout } from '../components/Layout/Layout'
import { Head } from '../components/Head/Head'

export default () => (
  <App>
    <Head title='' />
    <div className='Page'>
      <ul>
        <li>
          <h2>Global Foreign Aid</h2>
          <p>AidData, an organization based at the College of William &amp; Mary, has compiled a dataset of more than 1.5 million foreign aid projects between 1947 and 2013. Together, the dataset accounts for more than $7 trillion in commitments from 96 donors such as the U.S. government, UNICEF, the Nordic Development Fund, and the World Bank. AidData also publishes geospatial datasets and a data user guide. Previously: ForeignAssistance.gov, featured Jan. 13.</p>
          <ul>
            <li>
              <Link href="http://aiddata.org/about-aiddatas-work">
                <a>http://aiddata.org/about-aiddatas-work</a>
              </Link>
            </li>
            <li>
              <Link href="http://aiddata.org/country-level-research-datasets">
                <a>http://aiddata.org/country-level-research-datasets</a>
              </Link>
            </li>
            <li>
              <Link href="http://aiddata.org/subnational-geospatial-research-datasets">
                <a>http://aiddata.org/subnational-geospatial-research-datasets</a>
              </Link>
            </li>
            <li>
              <Link href="http://aiddata.org/data-user-guide">
                <a>http://aiddata.org/data-user-guide</a>
              </Link>
            </li>
            <li>
              <Link href="http://beta.foreignassistance.gov/">
                <a>http://beta.foreignassistance.gov/</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>The Ghibliverse</h2>
          <p>The unofficial Studio Ghibli API contains structured information about the famed Japanese animation studio’s films (e.g., Princess Mononoke and Spirited Away), plus the characters, locations, and vehicles featured in them. You can also download a single file containing all the data.</p>
          <ul>
            <li>
              <Link href="https://ghibliapi.herokuapp.com/">
                <a>https://ghibliapi.herokuapp.com/</a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/janaipakos/ghibliapi/blob/master/data.json">
                <a>https://github.com/janaipakos/ghibliapi/blob/master/data.json</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Cherry Blossoms</h2>
          <p>Yasuyuki Aono, an associate professor at Osaka Prefecture University, has collected the historical flowering dates of Kyoto’s Prunus jamasakura cherry trees going all the way back to the 9th century. The dataset is based on “many diaries and chronicles written by Emperors, aristocrats, [governors] and monks,” Aono writes. The dates are those “on which cherry blossom viewing parties had been held or full flowerings had been observed.” Over the past century, Kyoto’s cherry trees have been blooming earlier and earlier. Related: @bbgblossoms, a Twitter bot that tracks the status of the Brooklyn Botanic Garden’s 152 cherry trees.</p>
          <ul>
            <li>
              <Link href="http://atmenv.envi.osakafu-u.ac.jp/aono/kyophenotemp4/">
                <a>http://atmenv.envi.osakafu-u.ac.jp/aono/kyophenotemp4/</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.bbg.org/collections/cherries">
                <a>https://www.bbg.org/collections/cherries</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Nobel Prizes</h2>
          <p>The prestigious Scandinavian awards have an API. The official documentation explains it succinctly: “The data is free to use and contains information about who has been awarded the Nobel Prize, when, in what prize category and the motivation, as well as basic information about the Nobel Laureates such as birth data and the affiliation at the time of the award. The data is regularly updated as the information on Nobelprize.org is updated, including at the time of announcements of new Laureates.” Related: “These Nobel Prize Winners Show Why Immigration Is So Important For American Science,” by my colleague Peter Aldhous. Plus: The R code supporting Peter's analysis.</p>
          <ul>
            <li>
              <Link href="http://atmenv.envi.osakafu-u.ac.jp/aono/kyophenotemp4/">
                <a>http://atmenv.envi.osakafu-u.ac.jp/aono/kyophenotemp4/</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.bbg.org/collections/cherries">
                <a>https://www.bbg.org/collections/cherries</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .Page {
      }
    `}</style>
  </App>
)

https://www.nobelprize.org/nobel_organizations/nobelmedia/nobelprize_org/developer/
https://nobelprize.readme.io/v1.0
https://www.buzzfeed.com/peteraldhous/immigration-and-science
https://buzzfeednews.github.io/2017-01-immigration-and-science/
