import React from "react";

class Car extends React.Component{
    render(){
      return <h2> Hello this is a {this.props.brand} car! </h2>;
    }
  }

  export default Car;