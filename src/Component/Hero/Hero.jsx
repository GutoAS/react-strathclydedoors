import React from "react";
import "./hero.css";

import {
  land_two,
  logo_01,
  logo_02,
  logo_03,
  boximg,
} from "../../Utils/landing-page-assets/image";
import Count from "./Count";

const Hero = () => {
  return (
    <>
      <div className="hero section-padding">
        <div className="hero-content">
          <h1>Trendy Doors for a Trendy Home</h1>
          <p>
            Strathclyde doors are part of Strathclyde windows Ltd. This is our
            new innovative site to help our clients choose a new door design.
            All you need to do is take a picture of your property and upload it
            and you can change the front door of your property to see how it
            would look like if you changed the design and colour.The new door
            will help keep your home insulated to help reduce energy bills.
          </p>
          <div class="box">
            <img alt="" src={boximg} class="round-image" />
            <p class="content">"Best Service We have ever use."</p>
          </div>

          <button type="button" className="land-btn">
            Design Your Door
          </button>
        </div>
        <div className="hero-image">
          <img src={land_two} alt="worker" />
          <Count value="2500" />
        </div>
      </div>

      <div className="testi-logos ">
        <img src={logo_01} alt="logo_01" />
        <img src={logo_02} alt="logo_02" />
        <img src={logo_03} alt="logo_03" />
      </div>
    </>
  );
};

export default Hero;
