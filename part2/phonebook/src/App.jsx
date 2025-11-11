import { useState, useEffect } from 'react'
import NamesNNumbers from './components/NamesNNumbers'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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
      phonebookService
        .create(entryObject)
        .then(returnedEntry => {
          setPersons(persons.concat(returnedEntry))
          setNewName('')
          setNewNumber('')
        })
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
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
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
