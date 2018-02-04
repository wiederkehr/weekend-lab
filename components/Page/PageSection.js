export const PageSection = (props) => (
  <div className='PageSection'>
    {props.children}
    <style jsx>{`
      .PageSection {
        border-bottom: 1px solid var(--grey-1);
        display: flex;
        justify-content: space-between;
        min-height: 50vh;
        padding: 2rem;
      }
      `}
    </style>
  </div>
)
export const PageSectionColumn = (props) => (
  <div className='PageSection__Column'>
    {props.children}
    <style jsx>{`
      .PageSection__Column {
        display: flex;
        flex-direction: column;
        flex-basis: calc(50% - 1rem);
      }
      `}
    </style>
  </div>
)
export const PageSectionTitle = (props) => (
  <h2 className='PageSection__Title'>
    {props.children}
    <style jsx>{`
      .PageSection__Title {
      }
      `}
    </style>
  </h2>
)
