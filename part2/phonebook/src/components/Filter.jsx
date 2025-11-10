const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <p>
        Show all entries with
        <input value={filter} onChange={handleFilterChange} />
      </p>
    </div >
  )
}

export default Filter
