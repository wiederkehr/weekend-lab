import classNames from 'classnames'

export const Champions = (props) => (
  <g>{ props.data.map((d, i) => <Champion champion={d} key={i} id={i} {...props} />) }</g>
)

export const Champion = (props) => {
  const positionX = props.xScale(props.champion.Year)
  const positionY = props.yScale(props.champion.Rank)
  const ageColor = props.ageScale(props.champion.Age)
  const sexColor = props.sexScale(props.champion.Sex)

  const frontCircleProps = {
    'data-id': props.id,
    'data-name': props.champion.Name,
    'data-rank': props.champion.Rank,
    'data-age': props.champion.Age,
    'data-sex': props.champion.Sex,
    'data-x': positionX,
    'data-y': positionY,
    onMouseOver: props.onMouseOver,
    onMouseOut: props.onMouseOut,
    className: 'Circle__Front'
  }
  const centerCircleProps = {
    className: classNames({
      'Circle__Center': true,
      'Circle__Center--active': props.hovered === props.id
    })
  }
  const backCircleProps = {
    className: classNames({
      'Circle__Back': true,
      'Circle__Back--active': props.hovered === props.id
    })
  }
  const groupProps = {
    transform: `translate(${positionX},${positionY})`
  }

  let color = null
  let sort = null

  switch(props.view) {
    case 'A':
      color = '#000000'
    break
    case 'B':
      color = sexColor
    break
    case 'C':
      color = ageColor
    break
    default:
      color = '#000000'
    break
  }

  return (
    <g {...groupProps} >
      <circle {...backCircleProps} />
      <circle {...centerCircleProps} />
      <circle {...frontCircleProps} />
      <style jsx>{`
        .Circle__Front {
          fill: transparent;
          r: 8;
          cursor: pointer;
        }
        .Circle__Center {
          fill: ${color};
          r: 2;
          transition: color 200ms;
        }
        .Circle__Back {
          fill: ${color};
          opacity: 0.4;
          r: 2;
          transition: r 200ms;
        }
        .Circle__Back.Circle__Back--active {
          r: 8;
        }
      `}</style>
    </g>
  )
}
