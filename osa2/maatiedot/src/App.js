import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import CountryName from './components/CountryName'
import Filter from './components/Filter'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const filteredCountries = (filter === '')
      ? countries
      : countries.filter(country => (
          country.name.toLowerCase()
            .indexOf(filter.toLowerCase()) > -1
      ))

  const showCountry = (name, event) => {
    event.preventDefault()
    setFilter(name)
  }

  const rows = () => {
    let rowCount = filteredCountries.length

    if (rowCount > 10) {
      return 'Too many matches, specify another filter'

    } else if (rowCount === 1) {
      return <Country
               country={filteredCountries[0]}
             />
    } else {
      return filteredCountries.map(country =>
               <CountryName
                key={country.name}
                name={country.name}
                handler={showCountry}
               />
             )
    }
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className="App">
      <Filter
        value={filter} handler={handleFilterChange}
      />
      <div>
        {rows()}
      </div>
    </div>
  );
}

export default App;
