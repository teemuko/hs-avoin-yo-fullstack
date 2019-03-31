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

  const labelGood = 'hyvä'
  const labelNeutral = 'neutraali'
  const labelBad = 'huono'

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
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
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
