import React, {Component, Fragment} from "react";
import axios from "axios";
import uuid from "uuid";
import Todo from "./todo";
const config = require('../config.json');


export default class Todos extends Component{

    state = {
        newtodo:{
            "id":"",
            "taskName":"",
            "completed": false
        },
        todos: []
    }

    fetchTodos = async () => {
        try{
            const res = await axios.get(`${config.api.invokeURL}/todos`);
            const todos = res.data;
            this.setState({todos: todos});

        }catch(err){
            console.log(`Error occured: ${err}`);
        }
    }

    componentDidMount = () => {
        this.fetchTodos();
    }

    handleDeleteTodo =  async (id, event) => {
        event.preventDefault();

        try{
            await axios.delete(`${config.api.invokeURL}/todos/${id}`);
            const updatedTodos = [...this.state.todos].filter(todo => todo.id !== id);
            this.setState({todos: updatedTodos});
        }catch(err){
            console.log(`Error, unable to delete: ${err}`)
        }
    }
    handleAddTodo = async (id, event) => {
        event.preventDefault();

        if (!this.state.newtodo.taskName) {
            alert("Please enter a task");
            return false;
          }

        try{
            const params = {
                "id": id,
                "taskName": this.state.newtodo.taskName,
                "completed" : false
            };
            await axios.post(`${config.api.invokeURL}/todos/${id}`, params);
            this.setState({todos: [...this.state.todos, this.state.newtodo]});
            this.setState({newtodo: {"taskName": "", "id": "", "completed": false}});

        }catch(err){
            console.log(`An error has occured: ${err}`);
        }

    }

    handleUpdateTodo = async(id, taskName, completed) => {
        try{
            const params = {
                "id": id,
                "taskName": taskName,
                "completed": completed
            };
            await axios.patch(`${config.api.invokeURL}/todos/${id}`, params);
            const todoUpdate = [...this.state.todos].find(todo => todo.id === id);
            todoUpdate.taskName = taskName;
            todoUpdate.completed = completed;
            const updatedTodos = [...this.state.todos];
            const todoUpdateIndex = this.state.todos.findIndex(todo => todo.id === id);
            updatedTodos.splice(todoUpdateIndex, 1, todoUpdate);
            this.setState({todos: updatedTodos});
            
        }catch(err){
            console.log(`Error when updating todo: ${err}`);
        }
    }


    onAddTodoNameChange = event => this.setState({newtodo: {...this.state.newtodo, "taskName": event.target.value, "id": uuid.v4()}});
    
    render(){
        const Todos = this.state.todos.map((item) =>
        <Todo 
        key={item.id}
        id={item.id}
        taskName={item.taskName}
        completed={item.completed}
        handleUpdateTodo={this.handleUpdateTodo}
        handleDeleteTodo={this.handleDeleteTodo}
        />);

        const Completed = this.state.todos.filter(todo => todo.completed === true);

        return(
        <Fragment>
            <div className="todoTitle">
                    <h1>Your tasks</h1>
            </div>
            <div className="todoWrapper">
                <div className="todoForm">
                    <form onSubmit={event => this.handleAddTodo(this.state.newtodo.id, event)}>
                        <input type="text" placeholder="Enter task" value={this.state.newtodo.taskName} onChange={this.onAddTodoNameChange}/>
                        <button type="submit">Add new todo</button>
                    </form>
                </div>
                <div className="Todos">
                    <ul>
                        {Todos}
                    </ul>
                    <h3>Completed: {Completed.length}/{this.state.todos.length}</h3>
                </div>
            </div>
        </Fragment>
        );

    }

} 