import { useState, useEffect } from 'react'
import NamesNNumbers from './components/NamesNNumbers'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'
import phonebookService from './services/phonebook'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState({ message: null, type: null })

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
    const exists = persons.find(person => person.name === newName)

    if (exists) {
      const confirmUpdate = window.confirm(
        `${newName} is already in the phonebook. Replace the associated number?`
      )
      if (confirmUpdate) {
        const updatedPerson = { ...exists, number: newNumber }
        phonebookService
          .update(exists.id, updatedPerson)
          .then(returnedEntry => {
            setPersons(persons.map(p => p.id !== exists.id ? p : returnedEntry))
            setNewName('')
            setNewNumber('')
            setNotification({ message: `Updated '${exists.name}'`, type: 'success' })
            setTimeout(() => {
              setNotification({ message: null, type: null })
            }, 5000)
          })
          .catch(error => {
            setNotification({ message: `The entry for '${exists.name}' was already deleted from the server`, type: 'error' })
            setTimeout(() => {
              setNotification({ message: null, type: null })
            }, 5000)
            setPersons(persons.filter(p => p.id !== exists.id))
          })
      }
    } else {
      const newPerson = { name: newName, number: newNumber }
      phonebookService
        .create(newPerson)
        .then(returnedEntry => {
          setPersons(persons.concat(returnedEntry))
          setNewName('')
          setNewNumber('')
          setNotification({ message: `Added '${returnedEntry.name}'`, type: 'success' })
          setTimeout(() => {
            setNotification({ message: null, type: null })
          }, 5000)
        })
    }
  }

  const removeEntry = (id) => {
    if (window.confirm('Delete this entry?')) {
      phonebookService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
          setNotification({ message: 'Successfully deleted entry', type: 'success' })
          setTimeout(() => {
            setNotification({ message: null, type: null })
          }, 5000)
        })
        .catch(error => {
          setNotification(
            { message: `The entry for '${persons.name}' was either already deleted from the server`, type: 'error' })
          setTimeout(() => {
            setNotification({ message: null, type: null })
          }, 5000)
          setPersons(persons.filter(p => p.id !== id))
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
      <Notification message={notification.message} type={notification.type} />
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
      <NamesNNumbers persons={filteredPersons} removeEntry={removeEntry} />
    </div>
  )
}

export default App
