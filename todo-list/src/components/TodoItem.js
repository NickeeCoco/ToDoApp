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
              maxlength="35"
            /> :
            <label 
              className={`todo-item-label ${todo.completed && "completed"}`}
              htmlFor={`todo-${todo.id}`}
            >
              {todo.text}
            </label>  
        }
      </div>

      <div className="todo-item-buttons">
        <button 
          className="todo-item-button edit-button btn" 
          onClick={() => isEdit ? renameTodo() : setIsEdit(prev => !prev)}
        >
          {isEdit ? <FontAwesomeIcon icon="save" /> : <FontAwesomeIcon icon="edit" />}
        </button>
        <button 
          className="todo-item-button delete-button btn" 
          onClick={() => deleteTodo(todo)}
        >
          <FontAwesomeIcon icon="trash" />
        </button>
      </div>
    </div>
  )
}

export default TodoItem