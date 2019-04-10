import React from 'react'
import Language from './Language'

const Country = ({ country }) => {
  const languages = () =>
    country.languages.map(language =>
      <Language
        key={language.iso639_1}
        language={language.name}
      />
    )

  return (
    <div>
      <h1>{country.name}</h1>
      <div>
        capital {country.capital}
      </div>
      <div>
        population {country.population}
      </div>
      <h3>languages</h3>
      <ul>
        {languages()}
      </ul>
      <img
        src={country.flag} alt='flag'
        width='180px' height='110px'
      />
    </div>
  )
}

export default Country
