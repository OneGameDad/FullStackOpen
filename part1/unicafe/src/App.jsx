import { useState } from 'react'

const Title = props => <h1>{props.text}</h1>

const Stats = (props) => (
  <p>{props.text} {props.value}</p>
)

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
      <Stats text={"Good:"} value={good} />
      <Stats text={"Neutral:"} value={neutral} />
      <Stats text={"Bad:"} value={bad} />
    </div>
  )
}

export default App
