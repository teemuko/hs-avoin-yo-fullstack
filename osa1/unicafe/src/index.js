import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button
    onClick={handleClick}
    style={{marginRight: 11 + 'px'}}>
    {text}
  </button>
)

const Statistic = ({label, value}) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics =
  ({labels, good, neutral,
    bad, total, average,
    positive}) => {

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <p>Ei yhtään palautetta annettu</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic label={labels.labelGood} value={good} />
          <Statistic label={labels.labelNeutral} value={neutral} />
          <Statistic label={labels.labelBad} value={bad} />
          <Statistic label={labels.labelTotal} value={total} />
          <Statistic label={labels.labelAverage} value={average} />
          <Statistic label={labels.labelPositive} value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const labels = {
    labelGood: 'hyvä',
    labelNeutral: 'neutraali',
    labelBad: 'huono',
    labelTotal: 'yhteensä',
    labelAverage: 'keskiarvo',
    labelPositive: 'positiivisia'
  }

  const handleGoodClick = () => {
    setGood(good + 1)

    setTotal(total + 1)
    setAverage( (good + 1 - bad) / (total + 1) )
    setPositive( ((good + 1) / (total + 1)) * 100 )
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)

    setTotal(total + 1)
    setAverage( (good - bad) / (total + 1) )
    setPositive( (good / (total + 1)) * 100 )
  }

  const handleBadClick = () => {
    setBad(bad + 1)

    setTotal(total + 1)
    setAverage( (good - bad - 1) / (total + 1) )
    setPositive( (good / (total + 1)) * 100 )
  }

  return (
    <div>
      <h2>anna palautetta</h2>
      <div>
        <Button
          handleClick={handleGoodClick}
          text={labels.labelGood}
        />
        <Button
          handleClick={handleNeutralClick}
          text={labels.labelNeutral}
        />
        <Button
          handleClick={handleBadClick}
          text={labels.labelBad}
        />
      </div>
      <h2>statistiikka</h2>
      <Statistics
        labels={labels} good={good}
        neutral={neutral} bad={bad}
        total={total} average={average}
        positive={positive}
      />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
