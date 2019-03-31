import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button
    onClick={handleClick}
    style={{marginRight: 11 + 'px'}}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const labelGood = 'hyvä'
  const labelNeutral = 'neutraali'
  const labelBad = 'huono'
  const labelTotal = 'yhteensä'
  const labelAverage = 'keskiarvo'
  const labelPositive = 'positiivisia'

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
          handleClick={handleGoodClick} text={labelGood}
        />
        <Button
          handleClick={handleNeutralClick} text={labelNeutral}
        />
        <Button
          handleClick={handleBadClick} text={labelBad}
        />
      </div>
      <h2>statistiikka</h2>
      <div>
        <p>{labelGood} {good}</p>
        <p>{labelNeutral} {neutral}</p>
        <p>{labelBad} {bad}</p>
        <p>{labelTotal} {total}</p>
        <p>{labelAverage} {average}</p>
        <p>{labelPositive} {positive} %</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
