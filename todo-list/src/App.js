import React, {useState, useEffect} from 'react';
import './App.css';

import AddTodoForm from "./components/AddTodoForm"
import TodoItem from "./components/TodoItem"
import Todos from "./utils/todosData"

function App() {

  const [todos, setTodos] = useState(Todos)
  const [id, setId] = useState(todos.length)
  // const isEmpty = todos.length > 0 ? false : true

  function handleChange(id) {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo
      }
    })

    setTodos(newTodos)
  }

  function deleteTodo(todo) {
    const newTodos = [...todos]
    const todoIndex = newTodos.indexOf(todo)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  function editTodo(id, newText) {
    const newTodos = todos.map(todo => {
      if(todo.id === id && newText.length > 0) {
        return {
          ...todo,
          text: newText
        }
      } else {
        return todo
      }
    })
    
    setTodos(newTodos)
  }

  function addTodo(newTodoText) {
    setId(prevState => prevState + 1)
  
    const newTodo = {
      id,
      text: newTodoText,
      completed: false
    }

    setTodos(prevState => [...prevState, newTodo])
  }

  useEffect(() => {
    
  })

  // useEffect(() => {
  //   setTodos([{id: 0, text: "Add a todo", completed: false}])
  // }, [isEmpty])

  const allTodos = todos.map(todo => (
    <TodoItem 
      key={todo.id} 
      todo={todo} 
      handleChange={handleChange} 
      deleteTodo={deleteTodo}
      editTodo={editTodo}
    />
  ))

  return (
    <div className="todo-list">
      <AddTodoForm addTodo={addTodo} />
      {allTodos}
    </div>
  );
}

export default App;
