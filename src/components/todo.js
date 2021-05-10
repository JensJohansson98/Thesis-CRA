import React, {Component} from "react";


export default class Todo extends Component{

    state = {
        completed: this.props.completed,
        updatedTaskName: this.props.taskName,
    }

    markAsDone = event => {
        this.setState({completed: !this.state.completed}, () =>{
            this.props.handleUpdateTodo(this.props.id, this.props.taskName, this.state.completed);
        });
    }

    render(){
        return(
            <div className="todo">
                <li>
                    {this.props.taskName}
                    <button onClick={event => this.props.handleDeleteTodo(this.props.id, event)} >x</button>
                    <input type="checkbox" onClick={this.markAsDone} defaultChecked={this.state.completed} id="checkcomplete"/>
                </li>
            </div>

        );
    }
 }
