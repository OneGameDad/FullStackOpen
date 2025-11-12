const Entry = ({ person }) => {
  console.log(person)
  return (
    <p>{person.name} {person.number}</p>
  )
}

export default Entry
