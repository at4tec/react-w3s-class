import React,{Component} from "react";


export default class App extends Component{
  render(){
    this.state={color:'green'}
    return <h1>hi,i am a {this.state.color} car</h1>
  }
} 