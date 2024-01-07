/* eslint-disable react/prop-types */
const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({module}) => {
  return (
    <p>{module.name} {module.exercises}</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part module={parts[0]}/>
      <Part module={parts[1]}/>
      <Part module={parts[2]}/>
    </div>
  )
}

const Total = ({parts}) => {
  let total = 0;
  parts.map(part=> total += part.exercises);
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts= {parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;