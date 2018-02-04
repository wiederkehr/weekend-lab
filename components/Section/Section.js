export const Section = (props) => (
  <div className='Section'>
    <SectionTitle>{props.title}</SectionTitle>
    <SectionBody>{props.children}</SectionBody>
    <style jsx>{`
      .Section {
        border-bottom: 1px solid var(--grey-1);
        height: 80vh;
        padding: 2rem;
      }
      `}
    </style>
  </div>
)
const SectionTitle = (props) => (
  <h2 className='Section__Title'>
    {props.children}
    <style jsx>{`
      .Section__Title {
      }
      `}
    </style>
  </h2>
)
const SectionBody = (props) => (
  <div className='Section__Body'>
    {props.children}
  </div>
)
