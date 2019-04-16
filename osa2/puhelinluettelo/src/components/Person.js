import React from 'react'

const Person = ({ person, deleteCall }) => {
  return (
    <div>
      {person.name} {person.number} <button
                                      onClick={deleteCall}>
                                      poista
                                    </button>
    </div>
  )
}

export default Person
