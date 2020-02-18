import React from "react"

function TodoItem(props) {
  const {todo, handleChange, deleteTodo} = props

  return(
    <div className="todo-item">
      <input type="checkbox" onChange={() => handleChange(todo.id)} checked={todo.completed} name={todo.text} id={`todo-${todo.id}`} />
      <label for={`todo-${todo.id}`} className={`todo-label ${todo.completed && "completed"}`}>{todo.text}</label>
      <button style={{marginLeft:"20px"}} onClick={() => deleteTodo(todo)}>x</button>
    </div>
  )
}

export default TodoItem