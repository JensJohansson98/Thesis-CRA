import React from "react";
import TodoListItem from "./TodoListItem"
import AddTodoWindow from "./AddTodoWindow"
import TodoForm from "./TodoForm"
import { useState } from "react";




 export default function TodoList (){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="TodoListMain">
            <h1>TodoList</h1>
            
            <button onClick={() => setIsOpen(true)}>+ Add New Task</button>
            <AddTodoWindow open={isOpen} onClose={() => setIsOpen(false)}>
                <TodoForm/>
            </AddTodoWindow>
        <ul>
            <TodoListItem name="Go bowling"/>

        </ul>
        </div>

    );
 }