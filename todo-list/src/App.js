import React, {useState} from 'react';
import './App.css';

import TodoItem from "./components/TodoItem"
import Todos from "./utils/todosData"

function App() {
  const [todos, setTodos] = useState(Todos)
  
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

  const allTodos = todos.map(todo => <TodoItem key={todo.id} todo={todo} handleChange={handleChange} />)

  return (
    <div className="todo-list">
      {allTodos}
    </div>
  );
}

export default App;
