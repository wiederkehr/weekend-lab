import { Layout } from '../Layout/Layout'

export class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Layout>
          {this.props.children}
        </Layout>
        <style jsx>{`
          :global(:root) {
            --white:        #FFFFFF;
            --snow-white:   #F9F9F9;
            --bright-white: #F2F2F2;
            --smoke-white:  #EBEBEB;
            --bright-grey:  #DDDDDD;
            --light-grey:   #BBBBBB;
            --regular-grey: #999999;
            --mid-grey:     #666666;
            --dark-grey:    #333333;
            --black:        #000000;
          }

          :global(*) {
            box-sizing: border-box;
          }

          :global(html, body){
            margin: 0;
            padding: 0;
            font-family: 'Roboto Mono', monospace;
            font-weight: 400;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: var(--ixt-dark-grey);
            height: 100%;
          }

          :global(h1, h2, h3, h4, h5, h6) {
            font-weight: 500;
          }
        `}</style>
      </div>
    )
  }
}
