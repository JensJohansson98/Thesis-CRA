import React from "react";

export default class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    onClickSubmit(){

    }
    
  render() {
    return (
        <div className="TodoForm">
            <form>
                <label>
                    Description:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
  }
}