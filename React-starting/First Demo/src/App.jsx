const Header = (props) =>{
  return(
    <h1>{props.courseName}</h1>
  )
}
// first Part component is a functional component that takes 'part' and 'exercise' 
// and render information in a p tag
const Part = (props) =>{
  return(
    <p>The course: {props.part} contains: {props.exercise}</p>
  )
}

// then we pass part1 and part2 to the Part component
const Content = (props) =>{
  return(
    <>
    <Part part={props.part1} exercise={props.exercise1}/>
    <Part part={props.part2} exercise={props.exercise2}/>
    <Part part={props.part3} exercise={props.exercise3}/>
    </>
  )
}

const Total = (props) =>{
  return(
    
    <p>Number of courses is: "{props.total}"</p>
  )
}


const App = () =>{
  // creating a course named object which contains two properties name and parts
  // now parts contains mulitple data so we are making it an array of objects

  const course = {
     name: 'Half stack development',
     parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 20
      },
      {
        name:'State of a Component',
        exercises: 30
      }
    ]
  }
  return(
    <div>
      <Header courseName = {course.name}/>
      <Content part1={course.parts[0].name} exercise1={course.parts[0].exercises} 
      part2={course.parts[1].name} exercise2={course.parts[1].exercises}
      part3={course.parts[2].name} exercise3={course.parts[2].exercises}
      />
      <Total total = {course.parts[0].exercises + course.parts[1].exercises+ course.parts[2].exercises} />
    </div>
  )
}
// then the final value is passed to the Content component for both parts.
export default App;

// assignment - convert the content to have components