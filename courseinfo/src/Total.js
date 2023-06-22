
const Total = (props) => { 
  console.log(props);
  return(
    <p>Number of exercises  
      {props.course.parts[0].exercises + props.course.parts[0].exercises + props.course.parts[0].exercises}
    </p>
  )
}

export default Total