import FullEntry from './FullEntry'

const ShortEntry = ({ country, selectedCountry, setSelectedCountry }) => {
  const isSelected = selectedCountry?.cca3 === country.cca3

  const handleClick = () => {
    setSelectedCountry(isSelected ? null : country)
  }

  return (
    <div>
      {country.name.common} ({country.region}){' '}
      <button onClick={handleClick}>{isSelected ? 'Hide' : 'Show'}</button>
      {isSelected && <FullEntry country={country} />}
    </div>
  )
}

export default ShortEntry
