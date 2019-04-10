import React, { useState, useEffect } from 'react'
import axios from 'axios'
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

  const rows = () => filteredCountries.map(country =>
    <CountryName
      key={country.name}
      name={country.name}
    />
  )

  const result = () => {
    let rowData = rows()
    let rowCount = rowData.length

    if (rowCount > 10) {
      return 'Too many matches, specify another filter'
    } else {
      return rowData
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
        {result()}
        {/*rows()*/}
      </div>
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;
