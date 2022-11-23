import React, { Component } from 'react'

 class App extends Component {
  handleEvent(){
    console.log("Button click!")
  }
  state={
    text: "Click here",
    clicked: false
 
  };
  
  clickHandler = () => {
    this.setState({ clicked:!this.state.clicked,text:this.state.text==="click here"? "clicked":"click here"});
  };
 
 
  render() {
    const { text, clicked } = this.state;

    let className = "subscribe-button";

    if (!clicked) {
      className += " subscribe-button_grey";
    } 
    else  {
      className += " subscribe-button_blue";
    }
 

    return (
      <div>
       
<button className='but'onClick={this.handleEvent}> Click</button>
<button className={className}   
              onClick={this.clickHandler}>  {text}
      </button>

      </div>
    )
  }
}
export default App;
