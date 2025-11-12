import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then(data => {
        setCountries(data)
        setFiltered(data)
      })
      .catch(error => console.error('Error fetching countries: ', error))
  }, [])

  if (!countries) {
    return (
      <div>
        <h1>Countries</h1>
        <p>Nothing to Show</p>
      </div>
    )
  }

  const handleSearch = (event) => {
    const value = event.target.value
    setSearch(value)

    const lowerValue = value.toLowerCase()
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(lowerValue)
    )
    setFiltered(filteredCountries)
  }

  return (
    <div>
      <h1>Countries</h1>
      <Filter search={search} handleSearch={handleSearch} />
      <Countries filtered={filtered} />
    </div>
  )
}

export default App
