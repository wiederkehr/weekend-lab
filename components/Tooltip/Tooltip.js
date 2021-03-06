import classNames from 'classnames'

export const Tooltip = (props) => {
  const className = classNames({
    'Tooltip': true,
    'Tooltip--top': props.rank >= 50,
    'Tooltip--bottom': props.rank < 50,
    'Tooltip--left': props.year > 2013,
    'Tooltip--right': props.year < 2005,
  })
  console.log(className);
  return (
    <div className={className} style={{ left: props.left, top: props.top}}>
      <div className='Tooltip__Section Tooltip__Section--first'>
        <span className='Tooltip__Title'>{ props.name }</span>
      </div>
      <div className='Tooltip__Section'>
        <table className='Tooltip__Table'>
          <tbody>
            <tr>
              <td className='Tooltip__Table__TD'>Age</td>
              <td className='Tooltip__Table__TD Tooltip__Table__TD--right'>{ props.age }</td>
            </tr>
            <tr>
              <td className='Tooltip__Table__TD'>Sex</td>
              <td className='Tooltip__Table__TD Tooltip__Table__TD--right'>{ props.sex }</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='Tooltip__Section Tooltip__Section--last'>
        { props.children }
      </div>
      <style jsx>{`
        .Tooltip {
          background: white;
          border-radius: 3px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
          padding: 20px;
          pointer-events: none;
          position: absolute;
          text-align: left;
          transform: translate(-50%, calc(-100% - 20px));
          width: 300px;
        }
        .Tooltip--bottom                {
          transform: translate(-50%, calc(0% + 20px));
        }
        .Tooltip--bottom.Tooltip--left  {
          transform: translate(calc(-100% + 20px), calc(0% + 20px));
        }
        .Tooltip--bottom.Tooltip--right {
          transform: translate(calc(0% - 20px), calc(0% + 20px));
        }
        .Tooltip--top                   {
          transform: translate(-50%, calc(-100% - 20px));
        }
        .Tooltip--top.Tooltip--left     {
          transform: translate(calc(-100% + 20px), calc(-100% - 20px));
        }
        .Tooltip--top.Tooltip--right    {
          transform: translate(calc(0% - 20px), calc(-100% - 20px));
        }

        .Tooltip:after {
        	border: 10px solid transparent;
        	border-top-color: white;
        	content: '';
        	margin-left: -10px;
        	position: absolute;
        	top: calc(100% - 1px);
        	left: 50%;
        	width: 0;
        	height: 0;
          pointer-events: none;
        }

        .Tooltip--bottom:after {
          top: -19px;
          transform: rotate(180deg);
        }
        .Tooltip--left:after {
          left: calc(100% - 20px);
          right: auto;
        }
        .Tooltip--right:after {
          left: auto;
          right: calc(100% - 30px);
        }

        .Tooltip__Section {
          border-bottom: 1px solid #EEE;
          padding: 1em 0;
        }

        .Tooltip__Section--first {
          padding-top: 0;
        }

        .Tooltip__Section--last {
          border-bottom: none;
          padding-bottom: 0;
        }

        .Tooltip__Title {
          display: block;
          font-weight: 500;
        }

        .Tooltip__Table {
          border-spacing: 0;
          line-height: 1.25;
          width: 100%;
        }
        .Tooltip__Table__TH {
          color: var(--ixt-regular-grey);
          font-size: 0.75em;
          font-weight: normal;
          text-transform: uppercase;
        }
        .Tooltip__Table__TH,
        .Tooltip__Table__TD {
          padding: 0;
        }
        .Tooltip__Table__TH--right,
        .Tooltip__Table__TD--right {
          text-align: right;
        }

      `}</style>
    </div>
  )
}
