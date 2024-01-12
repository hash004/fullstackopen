import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    
  }

  const handleNewContact = (event) => {
    event.preventDefault();

    const contactExists = persons.filter((person) => person.name == newName)

    if (contactExists.length > 0) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({name: newName}))
      setNewName('');
    }
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=>{
        return <p key={person.name}>{person.name}</p>
      })}
    </div>
  )
}

export default App