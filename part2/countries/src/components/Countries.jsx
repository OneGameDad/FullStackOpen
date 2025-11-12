import ShortEntry from './ShortEntry'
import FullEntry from './FullEntry'

const Countries = ({ filtered }) => {
  if (filtered.length === 0) {
    return (
      <p>No countries match the filter.</p>
    )
  }
  else if (filtered.length === 1) {
    const country = filtered[0]
    return (
      <FullEntry country={country} />
    )
  }
  else if (filtered.length > 10) {
    return (
      <p>
        Too many countries to display, get more specific.
      </p>
    )
  }
  return (
    <div>
      <ul>
        {filtered.map(country => (
          <li key={country.cca3}>
            <ShortEntry country={country} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Countries
