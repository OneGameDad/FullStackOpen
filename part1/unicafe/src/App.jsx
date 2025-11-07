import { useState } from 'react'

const Title = props => <h1>{props.text}</h1>

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td><td>{props.value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const posPercentage = total === 0 ? 0 : (good / total) * 100

  if (total === 0) {
    return (
      <div>No Feedback Given</div>
    )
  }

  return (
    <table>
      <colgroup>
        <col style={{ width: '100px' }} />  {/* Column 1 width */}
        <col style={{ width: '150px' }} />  {/* Column 2 width */}
      </colgroup>
      <StatisticLine text={"Good:"} value={good} />
      <StatisticLine text={"Neutral:"} value={neutral} />
      <StatisticLine text={"Bad:"} value={bad} />
      <StatisticLine text={"Total:"} value={total} />
      <StatisticLine text={"Average:"} value={average.toFixed(10)} />
      <StatisticLine text={"Positive:"} value={`${posPercentage.toFixed(10)}%`} />
    </table>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const updateGood = () => {
    const newValue = good + 1
    console.log('Good now: ', newValue)
    setGood(newValue)
  }

  const updateNeutral = () => {
    const newValue = neutral + 1
    console.log('Neutral now: ', newValue)
    setNeutral(newValue)
  }

  const updateBad = () => {
    const newValue = bad + 1
    console.log('Bad now: ', newValue)
    setBad(newValue)
  }
  return (
    <div>
      <Title text={"Give Feedback"} />
      <Button onClick={updateGood} text="Good" />
      <Button onClick={updateNeutral} text="Neutral" />
      <Button onClick={updateBad} text="Bad" />
      <Title text={"Statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
