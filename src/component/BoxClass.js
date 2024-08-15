import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    let result = this.props.result;
    if (this.props.title === "Computer") {
      if (result === "win") {
        result = "lose";
      } else if (result === "lose") {
        result = "win";
      }
    }
    return (
      // src={props.item && props.item.img}
      <div className={`box ${result}`}>
        <h1 className="border-bottom">{this.props.title}</h1>

        <h2>{this.props.item ? this.props.item : "scissors"}</h2>
        {/* <img className='item-img' src={props.item?props.item.img:"https://cdn-icons-png.flaticon.com/512/4975/4975327.png"} alt='none'/> */}
        <div
          className={`item-img ${
            this.props.item ? this.props.item : "scissors"
          }`}
        ></div>

        <h2>{result ? result : "tie"}</h2>
      </div>
    );
  }
}
