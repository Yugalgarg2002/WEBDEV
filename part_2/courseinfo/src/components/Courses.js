const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <b>Number of exercises {totalExercises}</b>
  )
}
const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </>

const Course = ({ course }) => {
  return (
    <>
      <Header course={course['name']} />
      <Content parts={course['parts']} />
      <Total parts={course['parts']} />
    </>
  )
}

const Courses = ({course}) => {
  return (
    <>
    {course.map(x => <Course key={x.id} course={x} />)}
    </>
  )
}

export default Courses