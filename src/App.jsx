import { useState } from "react"
import { TodoContextProvider } from "./contexts"

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo)=>{
    setTodos(prev=>[{id:Date.now(), ...todo}, ...prev])
  }
  // assigning id automatically and rest of the information about the todo is passed on by the parameter

  const updateTodo = (id, todo)=>{
    setTodos((prev) => prev.map((curr)=>(
      curr.id === id ? todo : curr
    )))
  }
  // .map returns and maps what we return out of it into an array while iterating over each element, it accepts a callback containing the current element

  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((curr)=>(curr.id!==id)))
  }
  // .filter maps the returned value into an array which satisfies a certain condition. It works with a true condition.

  const toggleTodo = (id)=>{
    setTodos((prev)=>prev.map((curr)=>(
      curr.id===id?{...curr, completed : true} : curr
    )))
  }

  return (
    <TodoContextProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleTodo}}>
      
    </TodoContextProvider>
  )
}

export default App
