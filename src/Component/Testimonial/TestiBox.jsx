import React from "react";
import Testi from "./testi/Testi";
import "./testibox.css";
import { land_four } from "../../Utils/landing-page-assets/image";

const TestiBox = () => {
  return (
    <div className="testimonial-cont">
      <div className="testi-content">
        <p className="testi-p">Testimonial</p>
        <h1 className="testi-h1"> what Our Customers Say</h1>
      </div>
      <div className="testi-box">
        <img src={land_four} alt="Happy-Customers" />
        <Testi />
      </div>
    </div>
  );
};

export default TestiBox;
