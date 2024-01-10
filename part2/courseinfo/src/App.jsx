/* eslint-disable react/prop-types */
const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><b>total of {sum} exercises</b></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    parts.map(part => {
      return <Part key={part.id} part={part} />
    })
  )
}

const Course = ({course}) => {
  const sumTotal = course.parts.reduce((s, p) => {
    return s + p.exercises
  }, 0)

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={sumTotal} />
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
    {courses.map(course => {
      return <Course key={course.id} course={course} />
    })}
    </>
  )
}

export default App