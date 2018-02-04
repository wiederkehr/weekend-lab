import { format } from 'd3'
import { Axis } from './Axis'

export const Axes = (props) => {
  const xSettings = {
    translate: 'translate(0,' + props.height + ')',
    scale: props.xScale,
    orient: 'bottom',
    tickSize: -(props.height),
  }
  const ySettings = {
    translate: 'translate(0, 0)',
    scale: props.yScale,
    orient: 'left',
    ticks: 10,
    tickSize: -(props.width),
  }
  return (
    <g className="xy-axis">
      <Axis {...xSettings}/>
      <Axis {...ySettings}/>
    </g>
  )
}
