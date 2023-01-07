import React from "react";
import "./qualityicon.css";

const QualityIcon = (props) => {
  return (
    <div className="quality-icon">
      
      <img src={props.image} alt="" className="icon" />
      <h1 className="icon-h1">{props.title}</h1>
      <p className=" icon-p">
       {props.desc}
      </p>
    </div>
  );
};

export default QualityIcon;
