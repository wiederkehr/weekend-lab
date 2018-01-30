import { Axis } from './Axis'

export const XYAxis = (props) => {
  const xSettings = {
    translate: 'translate(0,' + props.height + ')',
    scale: props.xScale,
    orient: 'bottom',
    tickSize: -(props.height)
  }
  const ySettings = {
    translate: 'translate(0, 0)',
    scale: props.yScale,
    orient: 'left',
    tickSize: -(props.width)
  }
  return (
    <g className="xy-axis">
      <Axis {...xSettings}/>
      <Axis {...ySettings}/>
    </g>
  )
}
