import React from 'react'
import personService from '../services/persons.js'
import Person from './Person'

const PersonList = ({ persons, setPersons, addNotification }) => {
  const deletePerson = id => {
    const selectedPerson = persons.find(person =>
      person.id === id)

    if (!window.confirm(`Poistetaanko ${selectedPerson.name}?`)) {
      return;
    }
    console.log('Deleting id:', id)

    personService
      .sendDelete(id)
      .then(response => {
        const remainingPersons = persons.filter(person =>
          person.id !== id
        )
        setPersons(remainingPersons)
        console.log('Delete done for id:', id)

        addNotification(
          `Poistettiin ${selectedPerson.name}`, 'normal', 5000)
      })
      .catch(error => {
        setPersons(persons.filter(person =>
          person.id !== selectedPerson.id))

        addNotification(
          `Henkilö ${selectedPerson.name} oli jo poistettu`, 'error', 5000)
      })
  }

  const rows = () => persons.map(person =>
    <Person
      key={person.name}
      person={person}
      deleteCall={() => deletePerson(person.id)}
    />
  )

  return (
    <div>
      {rows()}
    </div>
  )
}

export default PersonList
