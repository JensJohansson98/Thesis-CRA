import React, {useRef} from "react";
import './App.css';
import TodoList from "./components/TodoList"
import { useState } from "react";


function App (){
  const [todos, setTodos] = useState([])

  const todoNameRef = useRef();

  function onClickSubmit(e){
      const name = todoNameRef.current.value
      if(name === '') return
      
      setTodos(prevTodos => {
        return [...prevTodos, {id: 1, name: name, complete:false}]
      })

      todoNameRef.current.value = null
  }

    return(
      <>
      <TodoList todos={todos}/>
    
      <label>
        <input ref={todoNameRef} type="text" name="name" />
      </label>  
      <button onClick={onClickSubmit}> Submit </button>
      <div> 0 Left todo</div>  

      </>
    );      
  }

  export default App;