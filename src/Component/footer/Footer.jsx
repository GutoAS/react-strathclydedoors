import React from "react";
import "./footer.css";
import logo from "../../Utils/logo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section-1">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <p className="footer-section-1-p">
          We do great doors at even better prices, with 5-star Google reviewed customer service.
          </p>
        </div>
        <div className="footer-icons">
          <a href="/">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      {/* footer section-2 */}
      <div className="footer-section-2">
        <div className="footer-section-2-content">
          <h4>Quick Links</h4>
        </div>
        <div className="section-2-links">
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/">
            <li>About Us</li>
          </a>
          <a href="/">
            <li>Contact Us</li>
          </a>
        </div>
      </div>

      {/* footer section -3 */}
      <div className="footer-section-3">
        <h4 className="footer-section-3-h3">Contact Info</h4>
        <div className="footer-contact-1">
          <FaMapMarkerAlt color="#fff" size={20} />
          <p>10 Waverley Street, Glasgow</p>
        </div>
        <div className="footer-contact-2">
          <AiFillClockCircle color="#fff" size={20} />
          <p>Mon - Sat : 6am-10pm</p>
        </div>
        <div className="footer-contact-3">
          <BsFillTelephoneFill color="#fff" size={20} />
          <p>+44-01412808585</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
