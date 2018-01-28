import { nest, sum } from 'd3'
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts'

const convertData = (data) => {
  let derivate = null
  if(data !== null) {
    derivate = nest()
      .key(d => d.Name)
      .rollup(v => ({ Years: v.length }))
      .entries(data)
      .map(d => ({ Name: d.key, Years: d.value.Years }))
      .sort((a, b) => b.Years - a.Years)

    derivate = nest()
      .key(d => d.Years)
      .rollup(v => ({ Dogs: v.length }))
      .entries(derivate)
      .map(d => ({ Years: d.key, Amount: d.value.Dogs }))
      .sort((a, b) => a.Years - b.Years)
  }
  return derivate
}

export const RacingYears = (props) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={convertData(props.data)}
      margin={{top: 0, right: 0, left: 0, bottom: 0}}>
      <XAxis dataKey="Years"/>
      <YAxis/>
      <Bar dataKey="Amount" fill="midnightblue" />
    </BarChart>
  </ResponsiveContainer>
)
