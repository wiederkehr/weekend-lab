import { nest, sum } from 'd3'
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts'

const convertData = (data) => {
  let derivate = null
  if(data !== null) {
    derivate = nest()
      .key(d => d.Year)
      .rollup((v) => (
        {
          Male: sum(v, d => d.Sex === 'm' ? 1 : 0 ),
          Female: sum(v, d => d.Sex === 'f' ? 1 : 0 )
        }
      ))
      .entries(data)
      .map(d => ({ Year: d.key, Sire: d.value.Male, Dam: d.value.Female }))
  }
  return derivate
}

export const GenderBalance = (props) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={convertData(props.data)}
      margin={{top: 0, right: 0, left: 0, bottom: 0}}>
      <XAxis dataKey="Year"/>
      <YAxis/>
      <Legend />
      <Bar dataKey="Sire" stackId="a" fill="midnightblue" />
      <Bar dataKey="Dam" stackId="a" fill="lightcoral" />
    </BarChart>
  </ResponsiveContainer>
)
