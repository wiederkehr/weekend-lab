export const ScrollerSection = (props) => (
  <div className='ScrollerSection'>
    <ScrollerSectionTitle>{props.title}</ScrollerSectionTitle>
    <ScrollerSectionBody>{props.children}</ScrollerSectionBody>
    <style jsx>{`
      .ScrollerSection {
        border-bottom: 1px solid var(--grey-1);
        height: 80vh;
        padding: 2rem;
      }
      `}
    </style>
  </div>
)
const ScrollerSectionTitle = (props) => (
  <h2 className='ScrollerSection__Title'>
    {props.children}
    <style jsx>{`
      .ScrollerSection__Title {
      }
      `}
    </style>
  </h2>
)
const ScrollerSectionBody = (props) => (
  <div className='ScrollerSection__Body'>
    {props.children}
  </div>
)
