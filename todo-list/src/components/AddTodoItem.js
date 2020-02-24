import React, {useState, useRef} from "react"

function AddTodoItem(props) {
  const {addTodo} = props
  const [newTodoText, setNewTodoText] = useState("")
  const inputRef = useRef(null)

  function handleChange(event) {
    setNewTodoText(event.target.value)
  }

  function handleClick(event) {
    event.preventDefault()
    addTodo(newTodoText)
    inputRef.current.focus()
    setNewTodoText("")
  }

  return(
    <form className="add-todo-form">
      <label className="add-todo-label" for="new-todo">Add a todo</label>
      <input className="add-todo-input" ref={inputRef} type="text" id="new-todo" value={newTodoText} onChange={handleChange} />
      <button className="add-todo-button" style={{marginLeft: "20px"}} onClick={handleClick} disabled={newTodoText.length > 0 ? false : true}>+</button>
    </form>
  )
}

export default AddTodoItem