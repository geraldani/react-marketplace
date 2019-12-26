import React, { useState, useEffect } from 'react'

const PaginatorCountry = () => {
  const [countries, setContries] = useState([])

  useEffect(() => {
    const getData = async () => {
      const url = 'https://restcountries.eu/rest/v2/all'
      const res = await window.fetch(url)
      const response = await res.json()
      setContries(response)
    }
    getData()

  }, [])

  console.log(countries)
  return (
    <div>
      {
        countries.map(country => (
          <div key={country.alpha3Code}>
            <img src={country.flag} alt="" style={{ width: '100px' }} />
            <div>
              <h5>{country.translations.es}</h5>
              <small>Capital: {country.capital}</small>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default PaginatorCountry
