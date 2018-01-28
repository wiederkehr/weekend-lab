export const Section = (props) => (
  <div className='Section'>
    <SectionTitle>{props.title}</SectionTitle>
    <SectionBody>{props.children}</SectionBody>
    <style jsx>{`
      .Section {
        border-bottom: 1px solid var(--grey-1);
        height: 100vh;
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
  <p className='Section__Body'>
    {props.children}
    <style jsx>{`
      .Section__Body {
        margin: 0;
      }
      `}
    </style>
  </p>
)
