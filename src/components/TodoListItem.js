import React from "react";


export default class TodoListItem extends React.Component{
    
    constructor(props) {
        super(props);
        this.onClickRemove = this.onClickRemove.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
      }

      onClickRemove(){

      }

      onClickDone(){

      }

     render(){
         return(
             <div className="TodoListItem">
                 <li>
                    <h2>{this.props.name}</h2>
                    <button onClick ={this.onClickDone}> Done</button>
                    <button onClick={this.onClickRemove}>Remove</button>
                 </li>
             </div>

         );
     }
 }
