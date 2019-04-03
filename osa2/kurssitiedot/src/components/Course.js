import React from 'react'

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
  const parts =
    props.course.parts.map(
      part => <Part key={part.id} data={part} />)

  return (
    <div>
      {parts}
    </div>
  )
}

const Total = (props) => {
  const exercises =
    props.course.parts.map(
      part => part.exercises)
  const total =
    exercises.reduce( (s, p) => s + p )

  return (
    <p>
      yhteensä {total} tehtävää
    </p>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
    </div>
  )
}

export default Course
