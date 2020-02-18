import React, {useState} from "react"

function TodoItem(props) {
  const {todo, handleChange, deleteTodo, editTodo} = props
  const [isEdit, setIsEdit] = useState(false)

  function renameTodo() {
    editTodo(todo.id, document.getElementById("newTodoText").value)
    setIsEdit(prev => !prev)
  }

  return(
    <div className="todo-item">
      <input type="checkbox" onChange={() => handleChange(todo.id)} checked={todo.completed} name={todo.text} id={`todo-${todo.id}`} />
      {
        isEdit ? 
          <input type="text" placeholder={todo.text} id="newTodoText" /> :
          <label htmlFor={`todo-${todo.id}`} className={`todo-label ${todo.completed && "completed"}`}>{todo.text}</label>  
      }

      <button style={{marginLeft: "20px"}} onClick={() => isEdit ? renameTodo() : setIsEdit(prev => !prev)}>{isEdit ? "v" : "°"}</button>
      <button style={{marginLeft:"20px"}} onClick={() => deleteTodo(todo)}>x</button>
    </div>
  )
}

export default TodoItem