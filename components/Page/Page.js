export const Page = (props) => (
  <div className='Page'>
    {props.children}
    <style jsx>{`
      .Page {
        max-width: 1280px;
        margin: 0 auto;
      }
      `}
    </style>
  </div>
)
export const PageHeader = (props) => (
  <div className='Page__Header'>
    <h1>{props.title}</h1>
    <style jsx>{`
      .Page__Header {
        border-bottom: 1px solid var(--grey-1);
        padding: 2rem;
      }
      `}
    </style>
  </div>
)
export const PageBody = (props) => (
  <div className='Page__Body'>
    {props.children}
    <style jsx>{`
      .Page__Body {
        position: relative;
      }
      `}
    </style>
  </div>
)
export const PageFooter = (props) => (
  <div className='Page__Footer'>
    {props.children}
    <style jsx>{`
      .Page__Footer {
        padding: 2rem;
      }
      `}
    </style>
  </div>
)
