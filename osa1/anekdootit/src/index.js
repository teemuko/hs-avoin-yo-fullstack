import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button
    onClick={handleClick}
    style={{marginRight: 11 + 'px'}}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(
    Array(props.anecdotes.length).fill(0)
  )

  const handleVoteClick = () => {
    points[selected] += 1
    setPoints(points)
  }

  const handleRandomClick = () => {
    let randomNumber =
      Math.floor(Math.random() * props.anecdotes.length)

    setSelected(randomNumber)
  }

  return (
    <div>
      <div>
        <p>{props.anecdotes[selected]}</p>
        <p>has X votes</p>
      </div>
      <div>
        <Button
          handleClick={handleVoteClick}
          text={'vote'}
        />
        <Button
          handleClick={handleRandomClick}
          text={'next anecdote'}
        />
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
