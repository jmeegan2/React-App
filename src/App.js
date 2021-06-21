import React, { useState } from 'react';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])
  return (
      <>
      <TodoList />
      <input type="text" /> 
      <button>Add ToDo</button>
      <button>Clear Completed ToDos</button>
      <div>0 Left to do</div>
      </>
  )
}
 
export default App; 