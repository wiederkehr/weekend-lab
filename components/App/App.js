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
            --white:  hsla(0,0%,100%,1);
            --grey-1: hsla(0,0%,95%,1);
            --grey-2: hsla(0,0%,90%,1);
            --grey-3: hsla(0,0%,85%,1);
            --grey-4: hsla(0,0%,80%,1);
            --grey-5: hsla(0,0%,75%,1);
            --grey-6: hsla(0,0%,70%,1);
            --grey-7: hsla(0,0%,65%,1);
            --grey-8: hsla(0,0%,60%,1);
            --grey-9: hsla(0,0%,55%,1);
            --black:  hsla(0,0%,0%,1);
          }

          :global(*) {
            box-sizing: border-box;
          }

          :global(html, body){
            background: var(--grey-1);
            color: var(--black);
            font-family: 'Roboto Mono', monospace;
            font-weight: 400;
            height: 100%;
            margin: 0;
            padding: 0;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          :global(h1, h2, h3, h4, h5, h6) {
            font-weight: 500;
          }
        `}</style>
      </div>
    )
  }
}
