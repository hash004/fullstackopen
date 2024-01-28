import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personServices from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(()=>{
    personServices
      .getAllPersons()
      .then((allPersons)=>{
        setPersons(allPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNewContact = (event) => {
    event.preventDefault();

    const existingContact = persons.filter((person) => person.name == newName.trim())
    if (existingContact.length > 0) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const updatedPerson = {...existingContact[0], name: newName, number: newNumber}
        personServices.updatePerson(updatedPerson)
        setPersons(persons.map(person => person.id !== existingContact[0].id ? person : updatedPerson))
        setSuccessMessage(`${newName}'s number has been changed`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      }
    } else if (newName.length == 0 || newNumber.length == 0) {
      alert('Please fill in all the fields');
      return;
    } else {
      const newPerson = {name: newName, number: newNumber}
      personServices.addPerson(newPerson).then(res => setPersons(persons.concat(res)))
      setSuccessMessage(`Added ${newName}`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    }
    setNewName('');
    setNewNumber('');
  }

  const handleDeleteContact = (person) => {
    if(window.confirm(`Delete ${person.name}?`)) {
      personServices.deletePerson(person.id)
      setPersons(persons.filter(p => p.id != person.id))
    }
  }

  const personsToShow = !filter ? persons : persons.filter(person => person['name'].toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Filter filter={filter} onChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        handlers={{
          'handleNewContact': handleNewContact,
          'handleNameChange': handleNameChange,
          'handleNumberChange': handleNumberChange
        }}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} handleDelete={handleDeleteContact} />
    </div>
  )
}

export default App