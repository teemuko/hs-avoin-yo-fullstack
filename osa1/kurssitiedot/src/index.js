import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.data.name} {props.data.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part data={props.course.parts[0]} />
      <Part data={props.course.parts[1]} />
      <Part data={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      yhteensä {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} tehtävää
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
