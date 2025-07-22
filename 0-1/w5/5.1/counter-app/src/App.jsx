import React, { useState } from 'react'

const App = () => {
  const [todos,settodos]=useState([{
    title:"Go to Gym",
    description:" timing from 3-4",
    completed:false
  },{
     title:"Cohort Learn Dev",
    description:" timing from 3-4",
    completed:true
  }]);
  return (
    <div>
      {/* {JSON.stringify(todos)}//this is the ugliest way to render this on the screen  */}
      {/* <Todo title={todos[0].title} description={todos[0].description}/>
      <Todo title={todos[1].title} description={todos[1].description}/> */}
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}/>
      })}
    </div>
  )
}

export default App

function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
  
    </div>
  )
}
