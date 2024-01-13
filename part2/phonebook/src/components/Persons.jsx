/* eslint-disable react/prop-types */
const Person = ({person}) => <p key={person.name}>{person.name} {person.number}</p>

const Persons = ({ persons }) => {
  return (
    <>
    {persons.map(person=> (
      <Person key={person.name} person={person} />
    ))}
    </>
  )
}

export default Persons