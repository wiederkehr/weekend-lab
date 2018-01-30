import classNames from 'classnames'

const renderCircle = (props) => {
  return (record, index) => {

    const positionX = props.xScale(record['Tracked Hours'] ? record['Tracked Hours'] : 0)
    const positionY = props.yScale(record['Budget Hours'] ? record['Budget Hours'] : 0)

    const balance = () => {
      let balance = null
      if(record['Budget Hours'] && record['Tracked Hours']) {
        balance = record['Budget Hours'] / record['Tracked Hours']
      }else if(!record['Budget Hours']){
        balance = props.cMin
      }else if(!record['Tracked Hours']){
        balance = props.cMax
      }
      return balance
    }

    const color = props.cScale(balance())

    const frontCircleProps = {
      'data-id': record['Id'],
      'data-name': record['Name'],
      'data-budget': record['Budget Hours'],
      'data-tracked': record['Tracked Hours'],
      'data-x': positionX,
      'data-y': positionY,
      onMouseOver: props.onMouseOver,
      onMouseOut: props.onMouseOut,
      className: 'Circle__Front'
    }

    const centerCircleProps = {
      className: classNames({
        'Circle__Center': true,
        'Circle__Center--active': props.hovered === record['Id']
      })
    }

    const backCircleProps = {
      className: classNames({
        'Circle__Back': true,
        'Circle__Back--active': props.hovered === record['Id']
      })
    }

    const groupProps = {
      transform: `translate(${positionX},${positionY})`,
      key: index
    }

    return (
      <g {...groupProps} >
        <circle {...backCircleProps} />
        <circle {...centerCircleProps} />
        <circle {...frontCircleProps} />
        <style jsx>{`
          .Circle__Front {
            fill: transparent;
            r: 20;
            cursor: pointer;
          }
          .Circle__Center {
            fill: ${color};
            r: 4;
          }
          .Circle__Back {
            fill: ${color};
            opacity: 0.4;
            r: 4;
            transition: r 200ms;
          }
          .Circle__Back.Circle__Back--active {
            r: 20;
          }
        `}</style>
      </g>
    )
  }
}

export const ScatterplotCircles = (props) => (
  <g>{ props.records.map(renderCircle(props)) }</g>
)
