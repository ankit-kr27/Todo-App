import { useEffect, useState } from "react"
import { TodoContextProvider } from "./contexts"
import { TodoForm, TodoItem } from "./components";

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
      curr.id===id?{...curr, completed : !curr.completed} : curr
    )))
  }

  useEffect(()=>{ // for fetching the initial localstorage data and setting the state
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

// Local storage is an object which only accept strings.

  useEffect(()=>{ // if any changes are made to state, then updating the local storage.
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleTodo}}>
      <TodoForm/>
      {
        todos.map(todo=>(
          <div key={todo.id}>
            <TodoItem todo={todo}/>
          </div>
        ))
      }
    </TodoContextProvider>
  )
}

export default App

// *******************************************

// Note
// The localStorage object stores data with no expiration date.

// The data is not deleted when the browser is closed, and are available for future sessions.

// The sessionStorage Object which stores data for one session.

// (The data is deleted when the browser window is closed)
