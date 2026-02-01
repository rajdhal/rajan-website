import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Rajan Dhaliwal</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://github.com/rajdhal"
            className="footer_social-icon"
            target="blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/rajan-dhaliwal1/"
            className="footer_social-icon"
            target="blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; Rajan Dhaliwal. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
