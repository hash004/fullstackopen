import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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
      setPersons(persons.concat({name: newName, number: newNumber}))
    }
    setNewName('');
    setNewNumber('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewContact}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange} 
          />
        </div>
        <div>
          number:
          <input 
            value={newNumber}
            onChange={handleNumberChange} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=>{
        return <p key={person.name}>{person.name} {person.number} </p>
      })}
    </div>
  )
}

export default App