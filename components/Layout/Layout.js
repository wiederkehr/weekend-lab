export class Layout extends React.Component {

  render() {
    return (
      <div className='Layout'>
        {this.props.children}
        <style jsx>{`
          .Layout {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            position: relative;
            display: none;
          }
          @media (min-width: 0px) {
            .Layout {
              display: block;
            }
          }
        `}</style>
      </div>
    )
  }
}
