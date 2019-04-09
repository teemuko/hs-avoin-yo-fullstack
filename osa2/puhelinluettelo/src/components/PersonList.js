import React from 'react'
import Person from './Person'

const PersonList = ({ persons }) => {
  const rows = () => persons.map(person =>
    <Person
      key={person.name}
      person={person}
    />
  )

  return (
    <div>
      {rows()}
    </div>
  )
}

export default PersonList
