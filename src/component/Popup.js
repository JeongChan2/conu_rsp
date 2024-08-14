import React from "react";
import './css/Popup.css';

const Popup = ({ onClose, result}) => {
  // const resultContents = (result === "tie"?"분발해":result==="win"?"축하해":"더 분발해")
  const handleClose = (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 방지
    onClose();
  }; 
  return (
      <div className="popup" onClick={onClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={handleClose}>&times;</span>
              <h2>{result}</h2>
              <div className={`item-img ${result}-gif`}></div>
          </div>
      </div>
  );
};

export default Popup;