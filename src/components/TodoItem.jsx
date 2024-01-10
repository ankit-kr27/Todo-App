import { useState } from "react"
import { useTodo } from "../contexts";

function TodoItems({todo}) {
    const [isTodoEditable, setTodoEditable] = useState(false);  // It changes when we click on the edit button
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const {updateTodo, deleteTodo, toggleTodo} = useTodo()

    const editTodo = ()=>{
        updateTodo(todo.id, {...todo,});
        setTodoEditable(false);
    }

  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? "bg-[#c6a9]": "bg-[#c6bad7]"}
    `}>
      <input 
        type="checkbox" 
        className="cursor-pointer" 
        checked={todo.completed}
        onChange={()=> toggleTodo(todo.id)}
      />
      <input type="text" className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable?"border-black/10 px-2":"border-transparent"}`}
      value={todoMsg}
      readOnly={!isTodoEditable} 
      onChange={(e)=>setTodoMsg(e.target.value)}  
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"  
        onClick={()=>{
            if(todo.completed) return;
            if(isTodoEditable){
                editTodo()
            }else setTodoEditable(prev=>!prev)
        }}
        disabled={isTodoEditable}
    >{isTodoEditable?"📂":"✏️"}</button>
    <button 
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={()=>{deleteTodo(todo.id)}}
    >❌</button>
    </div>
  )
}

export default TodoItems
