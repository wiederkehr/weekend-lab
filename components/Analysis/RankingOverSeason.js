import { nest, sum } from 'd3'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const convertData = (data) => {
  let derivate = null
  if(data !== null) {
    derivate = nest()
      .key(d => d.Name)
      .rollup(v => v.map((d,i) => ({ Year: i+1, Rank: d.Rank, Sex: d.Sex})))
      .entries(data)
      .map(d => ({ Name: d.key, Years: d.value, Sex: d.value[0].Sex }))
      .filter(d => d.Years.length > 1)
  }
  return derivate
}

export const RankingOverSeason = (props) => {
  const data = convertData(props.data)
  let series = null
  if(props.data !== null) {
    series = data.map(s => (
      <Line dataKey="Rank" data={s.Years} name={s.Name} key={s.Name} stroke={s.Sex === "m" ? "midnightblue" : "lightcoral" } />
    ))
  }
  return (
    <ResponsiveContainer width="100%" height={600}>
      <LineChart width={600} height={300} margin={{top: 0, right: 10, left: 0, bottom: 0}}>
        <CartesianGrid/>
        <XAxis dataKey="Year" type="category" allowDuplicatedCategory={false}/>
        <YAxis reversed={true} />
        <Tooltip/>
        {series}
      </LineChart>
    </ResponsiveContainer>
  )
}
