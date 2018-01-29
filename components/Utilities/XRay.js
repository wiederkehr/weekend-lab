export const XRay = (props) => (
  <ul>
    <li>View: {props.view}</li>
    <li>Width: {props.width}</li>
    <li>Height: {props.height}</li>
    <style jsx>{`
      ul {
        background: rgba(0,0,0,0.1);
        font-size: 0.75rem;
        margin: 0;
        padding: 0;
        position: absolute;
        left: 0;
        transform: translateY(-100%);
        top: 0;
        width: 100%;
      }
      li {
        display: inline-block;
        margin: 0 1rem;
      }
      `}
    </style>
  </ul>
)
