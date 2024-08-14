import React from "react";
import './css/Popup.css';

const Popup = ({ onClose, result}) => {
  const resultContents = (result === "tie"?"분발해":result==="win"?"축하해":"더 분발해")
  return (
      <div className="popup">
          <div className="popup-content">
              <span className="close" onClick={onClose}>&times;</span>
              <h2>{result}</h2>
              <div className="tmp">{resultContents}</div>
              <img src="./resources/rsp.gif" alt="ss"/>
          </div>
      </div>
  );
};

export default Popup;