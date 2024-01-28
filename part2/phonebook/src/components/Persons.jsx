/* eslint-disable react/prop-types */
const Person = ({person, handleDelete}) => {
  const styling = {
    display: 'inline-block',
    marginRight: '20px',
  }
  return (
    <div>
      <p key={person.id} style={styling}>
        {person.name} {person.number}
      </p>
      <button onClick={() => {handleDelete(person)}}>
        Delete
      </button>
    </div>
  )
}

const Persons = ({ persons, handleDelete }) => {
  return (
    <>
    {persons.map(person=> (
      <Person key={person.id} person={person} handleDelete={handleDelete} />
    ))}
    </>
  )
}

export default Persons