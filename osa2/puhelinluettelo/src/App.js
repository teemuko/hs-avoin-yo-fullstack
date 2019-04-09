import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Martti Tienari', phone: '040-654321' },
    { name: 'Arto Järvinen', phone: '040-987654' },
    { name: 'Lea Kutvonen', phone: '040-456123' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filter, setFilter ] = useState('')

  const filteredPersons = (filter === '')
      ? persons
      : persons.filter(person => (
          person.name.toLowerCase()
            .indexOf(filter.toLowerCase()) > -1
      ))

  const clearInputFields = () => {
    setNewName('')
    setNewPhone('')
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
      phone: newPhone
    }

    setPersons(persons.concat(personObject))
    clearInputFields()
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
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
        phoneValue={newPhone} phoneHandler={handlePhoneChange}
      />
      <h2>Numerot</h2>
      <PersonList persons={filteredPersons} />
    </div>
  )

}

export default App
