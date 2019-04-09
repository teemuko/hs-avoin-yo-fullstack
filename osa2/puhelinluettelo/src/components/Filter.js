import React from 'react'

const Filter = ({ filter, handler }) => {
  return (
    <div>
      rajaa näytettäviä <input
                          value={filter}
                          onChange={handler}
                        />
    </div>
  )
}

export default Filter
