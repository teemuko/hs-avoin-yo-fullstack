import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Martti Tienari', phone: '040-654321' },
    { name: 'Arto Järvinen', phone: '040-987654' },
    { name: 'Lea Kutvonen', phone: '040-456123' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const rows = () => persons.map(person =>
    <Person
      key={person.name}
      person={person}
    />
  )

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

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <h2>lisää uusi</h2>
      <form onSubmit={addPerson}>
        <div>
          nimi: <input
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>numero: <input
                       value={newPhone}
                       onChange={handlePhoneChange}
                     />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <div>
        {rows()}
      </div>
    </div>
  )

}

export default App
