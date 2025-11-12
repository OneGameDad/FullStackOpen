const FullEntry = ({ country }) => {
  const languages = country.languages
    ? Object.values(country.languages)
    : []
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>{country.name.official}</p>
      <h3>Region: {country.region}</h3>
      <p>SubRegion: {country.subregion}</p>
      <h4>Capital: {country.capital}</h4>
      <p>Area: {country.area} km2</p>
      <h4>Language(s):</h4>
      <ul>
        {languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
      <h3>Flag</h3>
      <img src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        className="country-flag"
      />
    </div>
  )
}

export default FullEntry
