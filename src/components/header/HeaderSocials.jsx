import React from 'react'
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa"; 
import {ImLinkedin} from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import "./header.css";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/praveen-kumar-chauhan" target="_blank"><ImLinkedin/></a>
        <a href="https://github.com/Praveen-2022" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/codingwithpraveen" target="_blank"><FaInstagram/></a>
        <a href="https://twitter.com/Praveen52" target="_blank"><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials;