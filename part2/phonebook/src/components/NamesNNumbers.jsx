import Entry from './Entry'

const NamesNNumbers = (props) => {
  console.log(props)
  const persons = props.persons
  return (
    <div>
      {
        persons.map(person => (
          <Entry key={person.name} person={person} />
        ))
      }
    </div>
  )
}

export default NamesNNumbers
