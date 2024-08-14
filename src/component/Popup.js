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
              <img src="https://www.nemopan.com/files/attach/images/6294/857/160/011/7f03eef3205abfde9050bf1f04749868.gif" alt="ss"/>
          </div>
      </div>
  );
};

export default Popup;