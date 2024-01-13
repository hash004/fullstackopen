/* eslint-disable react/prop-types */
const PersonForm = ({newName, newNumber, handlers}) => {
  return (
    <form onSubmit={handlers.handleNewContact}>
      <div>
        name: 
        <input 
          value={newName}
          onChange={handlers.handleNameChange} 
        />
      </div>
      <div>
        number:
        <input 
          value={newNumber}
          onChange={handlers.handleNumberChange} 
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm