import React from "react"

function TodoItem(props) {
  const {todo, handleChange} = props

  return(
    <div className="todo-item">
      <input type="checkbox" onChange={() => handleChange(todo.id)} checked={todo.completed} /><span className={`todo-label ${todo.completed && "completed"}`}>{todo.text}</span>
    </div>
  )
}

export default TodoItem