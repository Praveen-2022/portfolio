import React from "react";
import "./footer.css";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Praveen | Dev
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        {/* <li><a href='#services'></a>Services</li> */}
        <li>
          <a href="#qualification">Qualification</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/praveen-kumar-chauhan"
          target="_blank"
        >
          <GrLinkedin />
        </a>
        <a href="https://github.com/Praveen-2022" target="_blank">
          <GrGithub />
        </a>
        <a href="https://twitter.com/Praveen52" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/codingwithpraveen" target="_blank">
          <BsInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          {" "}
          &copy; Praveen's Presonal Portfolio All rights Reversed @2023.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
