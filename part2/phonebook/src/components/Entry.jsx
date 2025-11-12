const Entry = ({ person, removeEntry }) => {
  console.log(person)
  return (
    <p>{person.name} {person.number}
      <button onClick={() => removeEntry(person.id)}>Delete</button>
    </p>
  )
}

export default Entry
