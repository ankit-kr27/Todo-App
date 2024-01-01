import { TodoContextProvider } from "./contexts"

function App() {

  return (
    <TodoContextProvider value={{todos, addTodo, }}>
      
    </TodoContextProvider>
  )
}

export default App
