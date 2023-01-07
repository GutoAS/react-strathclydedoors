import React from "react";
import "./service.css";
const Service = (props) => {
  return (
    <>
      <div className="service-icon-box">
        <div className="icon">
          <img src={props.icon} alt="icon" />
        </div>
        <div className="icon-content">
          <h4>{props.title}</h4>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default Service;
