import React from "react";
import "./services.css";
import services_img from "../../Utils/landing-page-assets/services_img.jpg";
import Service from "./serviceicon/Service";
import {
  service_1,
  service_2,
  service_3,
  service_4,
} from "../../Utils/landing-page-assets/image";
import Count from "./count";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="services-img">
      
          <img src={services_img} alt="" />
          
        </div>

        <div className="services-content">
          <p className="top-p">Welcome to Strathclyde Doors</p>
          <h1>Explore Our Services</h1>
          <p className="services-content-p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus quisquam odio nesciunt tempora aspernatur quaerat.
          </p>
          <div className="services-icons">
            <Service
              icon={service_1}
              title="Window Services"
              desc="lorem ipsum dolor sit amet consectetur adipiscing leit."
            />
            <Service
              icon={service_2}
              title="Window Installation"
              desc="lorem ipsum dolor sit amet consectetur adipiscing leit."
            />
            <Service
              icon={service_3}
              title="Door Services"
              desc="lorem ipsum dolor sit amet consectetur adipiscing leit."
            />
            <Service
              icon={service_4}
              title="Door Installation"
              desc="lorem ipsum dolor sit amet consectetur adipiscing leit."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
