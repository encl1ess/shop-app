import React, { FC } from "react";
import "./../styles/css/index.css";
import { FBIcon, IconButton, InstagramIcon, TwitterIcon } from "../UIKit";
import Twi from "./../static/images/icons/twitter.svg";
import Inst from "./../static/images/icons/inst.svg";
import Fb from "./../static/images/icons/fb.svg";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="wrapper">
        <div className="links">
          <a href="#" className="logo">
            BWS
          </a>
          <a href="#">Design Gallery</a>
          <a href="#">Products</a>
          <a href="#">Resources</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-icons">
          <IconButton icon={<TwitterIcon />} />
          <IconButton icon={<InstagramIcon />} />
          <IconButton icon={<FBIcon />} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
