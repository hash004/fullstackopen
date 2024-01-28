import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personServices from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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

    const contactExists = persons.filter((person) => person.name == newName.trim())

    if (contactExists.length > 0) {
      alert(`${newName} is already added to phonebook`)
    } else if (newName.length == 0 || newNumber.length == 0) {
      alert('Please fill in all the fields');
      return;
    } else {
      const newPerson = {name: newName, number: newNumber}
      personServices.addPerson(newPerson)
      setPersons(persons.concat(newPerson))
    }
    setNewName('');
    setNewNumber('');
  }

  const personsToShow = !filter ? persons : persons.filter(person => person['name'].toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App