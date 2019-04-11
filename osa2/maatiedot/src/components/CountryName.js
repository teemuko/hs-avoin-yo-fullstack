import React from 'react'

const CountryName = ({ name, handler }) => {
  return (
    <div>
      {name} <button onClick={(e) => handler(name, e)}>show</button>
    </div>
  )
}

export default CountryName
