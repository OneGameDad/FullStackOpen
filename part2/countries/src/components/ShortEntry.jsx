const ShortEntry = ({ country }) => {
  return (
    <p>{country.name.common} ({country.region})</p>
  )
}

export default ShortEntry
