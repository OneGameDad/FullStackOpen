import Entry from './Entry'

const NamesNNumbers = ({ persons, removeEntry }) => {
  return (
    <div>
      {
        persons.map(person => (
          <Entry key={person.name} person={person} removeEntry={removeEntry} />
        ))
      }
    </div>
  )
}

export default NamesNNumbers
