import React,{Component} from "react";


export default class App extends Component{
  render(){
    this.state={
      color:'green',
      brand:'ford',
      year:2000
    }
    return <h1>
      hi,i am {this.state.color} {this.state.brand} car
      from year : {this.state.year}
      </h1>
  }
} 