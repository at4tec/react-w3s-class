import React,{Component} from "react";


class Car extends Component{
  constructor(props){
super(props)

 
  this.state={
    color:'green',
    brand:'ford',
    year:2000
  }
  
  this.changeColor=()=>{ //expresion is medotory
  this.setState({color:'silver'})
} }
render(){
 
  return <><h1> hi,i am {this.state.color} {this.state.brand} car
  from year : {this.state.year} </h1>
  
  </>
}
}

export default class App extends Component{

  render(){
    return <>
    <Car/>
    <button onMouseOver={this.props.changeColor} />
     </>
  }
} 