import React,{Component} from "react";


class Car extends Component{
  state={
    color:'green',
    brand:'ford',
    year:2000
  }
 changeColor=()=>{ //expresion is medotory
  this.setState({color:'silver'})
}
render(){
 
  return <><h1> hi,i am {this.state.color} {this.state.brand} car
  from year : {this.state.year} </h1>
  <button onMouseOver={this.changeColor} />
  </>
}
}

export default class App extends Component{
  render(){
    return <>
    <Car/>
     </>
  }
} 