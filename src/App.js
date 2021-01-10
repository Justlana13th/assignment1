import React, { Component } from 'react'
import UserInput from './NewComponent/UserInput'
import UserOutput from './NewComponent/UserOutput'

class App extends Component {

  state = {
    username: ""
  }

  changeState = (event) => {
    this.setState({
      username: event.target.value
    })
  }
 
  
  render() {

  const style = {
    margin: "50px auto",
    padding: "10px",
    border: "1px solid blue",
    width: "50%",
    textAlign: "center"
  }
    return (
      <div style={style}>
        <UserOutput name={this.state.username}  />
        <UserInput change={this.changeState} currentName={this.state.username}/>
      </div>
    )
  }
}

export default App;