import React, { Component } from 'react'
import './css/Popup.css';

export default class PopupClass extends Component {

  handleClose = () => {
    // e.stopPropagation(); // 클릭 이벤트 전파 방지
    this.props.onClose();
  }; 

  render() {
    return (
      <div className="popup" onClick={() => this.props.onClose()}>
          <div className="popup-content">
              <span className="close" onClick={() => this.handleClose()}>&times;</span>
              <h2>{this.props.result}</h2>
              <div className={`item-img ${this.props.result}-gif`}></div>
          </div>
      </div>
    )
  }
}
