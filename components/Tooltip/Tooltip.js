export const Tooltip = (props) => {
  return (
    <div className={'Tooltip'} style={{ left: props.left, top: props.top}}>
      <div className='Tooltip__Section Tooltip__Section--first'>
        <span className='Tooltip__Id'>{ props.id }</span>
        <span className='Tooltip__Title'>{ props.name }</span>
      </div>
      <div className='Tooltip__Section'>
        <table className='Tooltip__Table'>
          <thead>
            <tr>
              <th className='Tooltip__Table__TH'>Hours</th>
              <th className='Tooltip__Table__TH Tooltip__Table__TH--right'>Hours</th>
            </tr>
          </thead>
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

        .Tooltip:after {
        	border: 10px solid transparent;
        	border-top-color: white;
        	content: '';
        	margin-left: -10px;
        	position: absolute;
        	top: 100%;
        	left: 50%;
        	width: 0;
        	height: 0;
          pointer-events: none;
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

        .Tooltip__Id {
          color: darkgrey;
          display: block;
          font-size: 0.75em;
          font-weight: normal;
        }

        .Tooltip__Flag {
          background: orange;
          border-radius: 2px;
          color: white;
          font-size: 0.875rem;
          line-height: 1;
          padding: 1px 3px 0;
          position: absolute;
          right: 20px;
          top: 20px;
          text-transform: uppercase;
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
