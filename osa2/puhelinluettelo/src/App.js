import React, { useState, useEffect } from 'react'
import personService from './services/persons.js'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ notificationMessage, setNotificationMessage] = useState('')
  const [ notificationType, setNotificationType] = useState('')

  const hook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  useEffect(hook, [])

  const filteredPersons = (filter === '')
      ? persons
      : persons.filter(person => (
          person.name.toLowerCase()
            .indexOf(filter.toLowerCase()) > -1
      ))

  const addNotification = (message, type, timeout) => {
    setNotificationType(type)
    setNotificationMessage(message)

    setTimeout(() => {
      setNotificationType('normal')
      setNotificationMessage(null)
    }, timeout)
  }

  const clearInputFields = () => {
    setNewName('')
    setNewNumber('')
  }

  const updateNumber = () => {
    const selectedPerson = persons.find(person =>
      person.name === newName
    )

    if ((selectedPerson.number !== '') &&
      (!window.confirm(`${selectedPerson.name} on jo luettelossa, korvataanko vanha numero uudella?`))) {
      return;
    }

    const personObject = { ...selectedPerson, number: newNumber }

    personService
      .update(personObject.id, personObject)
      .then(updatedPerson => {

        const index = persons.findIndex(person =>
          person.id === updatedPerson.id
        )
        persons[index] = updatedPerson

        setPersons(persons)
        clearInputFields()

        addNotification(
          `Henkilön ${selectedPerson.name} numero vaihdettu`, 'normal', 5000)
      })
      .catch(error => {
        setPersons(persons.filter(person =>
          person.id !== selectedPerson.id))

        addNotification(
          `Henkilö ${selectedPerson.name} oli jo poistettu`, 'error', 5000)
      })
  }

  const addPerson = (event) => {
    event.preventDefault()
    const namesArray = persons.map(person =>
      person.name
    )

    if (namesArray.includes(newName)) {
      updateNumber();
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        clearInputFields()

        addNotification(
          `Lisättiin ${returnedPerson.name}`, 'normal', 5000)
      })
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
      <Notification
        message={notificationMessage}
        type={notificationType}
      />
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
      <PersonList
        persons={filteredPersons}
        setPersons={setPersons}
        addNotification={addNotification}
      />
    </div>
  )

}

export default App
