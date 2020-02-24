import React, {useState} from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function TodoItem(props) {
  const {todo, handleChange, deleteTodo, editTodo} = props
  const [isEdit, setIsEdit] = useState(false)

  function renameTodo() {
    let newText = document.getElementById("newTodoText").value
    editTodo(todo.id, newText)
    setIsEdit(prev => !prev)
  }

  return(
    <div className="todo-item flex-container">
      <div className="todo-item-info">
        <input 
          className="todo-item-checkbox" 
          type="checkbox" 
          onChange={() => handleChange(todo.id)} 
          checked={todo.completed} 
          name={todo.text} 
          id={`todo-${todo.id}`} 
        />
        {
          isEdit ? 
            <input 
              className="todo-item-input" 
              type="text" 
              placeholder={todo.text} 
              id="newTodoText" 
            /> :
            <label 
              className={`todo-label ${todo.completed && "completed"}`}
              htmlFor={`todo-${todo.id}`}
            >
              {todo.text}
            </label>  
        }
      </div>

      <div className="todo-item-buttons">
        <button onClick={() => isEdit ? renameTodo() : setIsEdit(prev => !prev)}>
          {isEdit ? <FontAwesomeIcon icon="save" /> : <FontAwesomeIcon icon="edit" />}
        </button>
        <button onClick={() => deleteTodo(todo)}>
          <FontAwesomeIcon icon="trash" />
        </button>
      </div>
    </div>
  )
}

export default TodoItem