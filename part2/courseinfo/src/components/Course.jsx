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

export default Course;