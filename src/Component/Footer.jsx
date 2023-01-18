import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <hr></hr>
        <Link to="/">
          <img
            className="footer-logo"
            alt="footer logo"
            src="images/logo.png"
          />
        </Link>
        <div className="social-media">
          <a href="https://www.instagram.com/tedxpdeu/" target="blank">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
          <a href="https://www.twitter.com/tedxpdeu/" target="blank">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
          <a href="https://www.facebook.com/TEDxPDPU/" target="blank">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </a>
        </div>
        <div className="weblinks">
          <Link to="/abouttedx">
            <div>ABOUT US</div>
          </Link>
          <Link to="/teams">
            <div>TEAM</div>
          </Link>
          <Link to="/speakers">
            <div>SPEAKERS</div>
          </Link>
          <Link to="/sponsers">
            <div>SPONSORS</div>
          </Link>
          <Link to="/faq">
            <div>FAQ's</div>
          </Link>
          <Link to="/contact">
            <div>CONTACT US</div>
          </Link>
        </div>
        <small className="license">
          This independent TEDx event is operated under license from TED.
        </small>
      </footer>
    </>
  );
};

export default Footer;
