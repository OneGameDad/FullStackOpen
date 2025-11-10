import { useState } from 'react'
import NamesNNumbers from './components/NamesNNumbers'
import AddPerson from './components/AddPerson'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const addEntry = (event) => {
    event.preventDefault()
    console.log('Button Clicked', event.target)
    const entryObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }

    const exists = persons.find(person => person.name === newName)

    if (exists) {
      alert(`The name: "${newName}" already exists`)
    } else {
      setPersons(persons.concat(entryObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <p>
          Show all entries with
          <form>
            <input value={filter} onChange={handleFilterChange} />
          </form>
        </p>
      </div>
      <h3>Add Entry</h3>
      <AddPerson
        addEntry={addEntry}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Entries</h3>
      <NamesNNumbers persons={filteredPersons} />
    </div>
  )
}

export default App
