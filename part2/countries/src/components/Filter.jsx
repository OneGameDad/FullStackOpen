const Filter = ({ search, handleSearch }) => {
  return (
    <p>
      <input type="text"
        placeholder='Search countries...'
        value={search}
        onChange={handleSearch}
      />
    </p>
  )
}

export default Filter
