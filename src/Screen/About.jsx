import React from "react";
import services_img from "../Utils/landing-page-assets/services_img.jpg";
import '../Screen/about.css'


const About = () => {
  return (
    <>
      <div className="services">
        <div className="services-img-about">
      
          <img src={services_img} alt="" />
          
        </div>

        <div className="services-content">
          <p className="top-p">Welcome to Strathclyde Doors</p>
          <h1>About Us</h1>
          <p className="services-content-p">
          We do things a bit differently from the big guys. We don’t do dodgy salesmen or inflated prices, no fake discounts or cheap materials. We do great doors at even better prices, with 5-star Google reviewed customer service. It’s not about us and what we want to sell you, it’s about you and what you want for your home.And if you’re anything like most of our customers you’ll want quality which will last, at a price you can afford. If you want to improve your home, with the security of a guarantee from the largest trade supplier in the UK and to deal with a company who will put your needs front and centre get in touch.
          </p>
           
        </div>
      </div>
    </>
  );
};

export default About;
