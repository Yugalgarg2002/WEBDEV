const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.part} {props.number}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
    <Part part={props.part[0]} number={props.number[0]} />
    <Part part={props.part[1]} number={props.number[1]} />
    <Part part={props.part[2]} number={props.number[2]} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of exercises {props.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part={[part1.name, part2.name, part3.name]} number={[part1.exercises, part2.exercises, part3.exercises]} />
      <Total total={part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}

export default App