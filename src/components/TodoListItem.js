import React from "react";


export default function TodoListItem({todo}){ 
    
    return(
        <div className="TodoListItem">
            <label>
                <input type="checkbox" checked={todo.complete}/>
                {todo.name}
            </label>
        </div>

    );
 }
