import React, { Component } from 'react'
import BoxClass from './component/BoxClass';
import './App.css';
import PopupClass from './component/PopupClass';

const choice = ["rock", "scissors", "paper"];

export default class AppClass extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
      isPopupOpen: false
    }
  }

  openPopup = () => {
    this.setState({
      isPopupOpen: true
    });
  };

  closePopup = () => {
    this.setState({
      isPopupOpen: false
    });
  };

  play = (userChoice) => {
    const computerChoice = this.randomChoice();
    this.setState({
      userSelect: userChoice,
      computerSelect: computerChoice,
      result: this.judgement(userChoice, computerChoice)
    });
    this.openPopup()
  }

  judgement = (user, computer) => {
    if (user === computer){
      return "tie";
    } else if (user === "rock") {
      return computer === "scissors"? "win":"lose";
    } else if (user === "scissors") {
      return computer === "rock"? "lose":"win";
    } else { // paper
      return computer === "rock"? "win":"lose";
    }
    
  }

  randomChoice = () => {
    const randomItem = Math.floor(Math.random() * choice.length);
    const final = choice[randomItem];
    return final;
  }

  render() {
    return (
      <div className='container'>
      <div className='main'>
        <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>

        <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result}/>
      </div>
      <div className='button-main'>
        <button className='button-image scissors' onClick={() => this.play("scissors")}></button>
        <button className='button-image rock' onClick={() => this.play("rock")}></button>
        <button className='button-image paper' onClick={() => this.play("paper")}></button>
      </div>

      {this.state.isPopupOpen && <PopupClass onClose={this.closePopup} result={this.state.result}/>}
    </div>
    )
  }
}
