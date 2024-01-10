import { createContext, useContext } from "react";

export const todoContext = createContext({
    // the context stores the data that is to be made aware to all the components
    // Below are just for the structure nothing to do with real data or anything, for the types of data to be identified
    todos:[
        {
            id: 1,
            todo: "Todo message",
            completed: false 
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleTodo: (id)=>{}
    // These are just vague functionalities for the context
})

export const TodoContextProvider = todoContext.Provider;    // This acts as a component.
// this is not necessary to do in here but it makes the other files look more cleaner

export const useTodo = ()=>{
    return useContext(todoContext);
}
