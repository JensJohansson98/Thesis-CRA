import React from "react";
import TodoListItem from "./TodoListItem"

 export default function TodoList ({todos}){
    return(
            todos.map(todo => {
                return <TodoListItem key={todo.id} todo={todo}/>
            })
    );
 }