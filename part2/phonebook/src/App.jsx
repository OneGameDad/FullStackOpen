import { useState } from 'react'
import NamesNNumbers from './components/NamesNNumbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0455126060', id: 1 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addEntry = (event) => {
    event.preventDefault()
    console.log('Button Clicked', event.target)
    const entryObject = {
      name: newName,
      number: newNumber
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
      <form onSubmit={addEntry}>
        <div>
          name: <input
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <NamesNNumbers persons={persons} />
    </div>
  )
}

export default App
