import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryName from './components/CountryName'

const App = () => {
  const [countries, setCountries] = useState([])

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const rows = () => countries.map(country =>
    <CountryName
      key={country.name}
      name={country.name}
    />
  )

  return (
    <div className="App">
      <p>Hello</p>
      <div>
        {rows()}
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
