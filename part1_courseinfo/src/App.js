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
      <p>Number of exercises {props.total[0] + props.total[1] + props.total[2]}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part={[course.parts[0].name, course.parts[1].name, course.parts[2].name]} number={[course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]} />
      <Total total={[course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]} />
    </div>
  )
}

export default App