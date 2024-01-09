/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value, tail}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {tail}</td>
    </tr>
  )
}

const Statistics = ({good,  neutral, bad, total, average, positive}) => {
  if(total===0){
    return <p>No Feedback given</p>
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value ={good} />
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={total}/>
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='positive' value={positive} tail='%' />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (counter, setter) => () => setter(counter+1);
  const total = () => good+neutral+bad
  const average = () => total() === 0 ? 0 : (good+(bad*-1))/total()
  const positive = () => total() === 0 ? 0 : (good/total())*100

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleClick(good, setGood)} text='good' />
      <Button onClick={handleClick(neutral, setNeutral)} text='neutral' />
      <Button onClick={handleClick(bad, setBad)} text='bad' />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total()}
        average={average()}
        positive={positive()}
      />
    </div>
  )
}

export default App