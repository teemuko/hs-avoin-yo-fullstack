import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const filteredPersons = (filter === '')
      ? persons
      : persons.filter(person => (
          person.name.toLowerCase()
            .indexOf(filter.toLowerCase()) > -1
      ))

  const clearInputFields = () => {
    setNewName('')
    setNewNumber('')
  }

  const addPerson = (event) => {
    event.preventDefault()
    let namesArray = persons.map(person =>
      person.name
    )

    if (namesArray.includes(newName)) {
      window.alert(`${newName} on jo luettelossa`)
      clearInputFields()
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    clearInputFields()
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <Filter
        filter={filter} handler={handleFilterChange}
      />
      <h2>lisää uusi</h2>
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName} nameHandler={handleNameChange}
        numberValue={newNumber} numberHandler={handleNumberChange}
      />
      <h2>Numerot</h2>
      <PersonList persons={filteredPersons} />
    </div>
  )

}

export default App
