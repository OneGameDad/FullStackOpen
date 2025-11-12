import ShortEntry from './ShortEntry'
import FullEntry from './FullEntry'

const Countries = ({ countries, selectedCountry, setSelectedCountry }) => {
  if (countries.length === 0) {
    return (
      <p>No countries match the filter.</p>
    )
  }
  else if (countries.length === 1) {
    const country = countries[0]
    return (
      <FullEntry country={country} />
    )
  }
  else if (countries.length > 10) {
    return (
      <p>
        Too many countries to display, get more specific.
      </p>
    )
  }
  return (
    <ul>
      {countries.map(country => (
        <li key={country.cca3}>
          <ShortEntry
            country={country}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </li>
      ))}
    </ul>
  )
}

export default Countries
