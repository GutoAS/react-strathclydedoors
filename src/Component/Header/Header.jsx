import React from "react";
import "./Header.css";
import logo from "../../Utils/logo.png";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <a href="/"><img src={logo}  alt="" /></a>
        </div>
        <div className="navbar-links">
          <ul>
            <a href="/" aria-current="page">
              <li>Home</li>
            </a>
            <a href="/door">
              <li>Design Your Door</li>
            </a>
            <a href="/About">
              <li>About</li>
            </a>
            <a href="/Contact">
              <li>Support</li>
            </a>
          </ul>
          <button type="button" className="book-btn btns">Book Now</button>
        </div>
       
        <div className="navbar-smallscreen ">
          <CgMenuRightAlt
            color="#333"
            size={27}
            onClick={() => settoggleMenu(true)}
          />

          {toggleMenu && (
            <div className="overlay-cont">
              <AiOutlineClose
                className="overlay-close"
                size={27}
                onClick={() => settoggleMenu(false)}
              />

              <div className="navbar-links-smallscreen slide-in-top">
                <ul>
                  <a href="/" aria-current="page">
                    <li>Home</li>
                  </a>
                  <a href="/door">
                    <li>Design Your Door</li>
                  </a>
                  <a href="/About">
                    <li>About</li>
                  </a>
                  <a href="/Contact">
                    <li>Support</li>
                  </a>
                  <a href="/Contact">
                    <li>Book Now</li>
                  </a>
                </ul>
          
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
