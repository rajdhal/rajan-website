import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  /*=============== Change Background Header ===============*/
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  /*=============== Dark Mode ===============*/
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleNavClick = (sectionId) => {
    setActiveNav(sectionId);
    showMenu(false); // Close the menu on mobile
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a
          href="#home"
          className="nav_logo"
        >
          Rajan Dhaliwal
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item" key="home">
              <a
                href="#home"
                onClick={() => handleNavClick("#home")}
                className={
                  activeNav === "#home" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>

            <li className="nav_item" key="about">
              <a
                href="#about"
                onClick={() => handleNavClick("#about")}
                className={
                  activeNav === "#about" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            <li className="nav_item" key="skills">
              <a
                href="#skills"
                onClick={() => handleNavClick("#skills")}
                className={
                  activeNav === "#skills" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>

            <li className="nav_item" key="experience">
              <a
                href="#experience"
                onClick={() => handleNavClick("#experience")}
                className={
                  activeNav === "#experience" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-briefcase-alt nav_icon"></i> Experience
              </a>
            </li>

            <li className="nav_item" key="projects">
              <a
                href="#projects"
                onClick={() => handleNavClick("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav_link active-link"
                    : "nav_link"
                }
              >
                <i className="uil uil-wrench nav_icon"></i> Projects
              </a>
            </li>

            <li className="nav_item" key="contact">
              <a
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className={
                  activeNav === "#contact" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => showMenu(false)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>

        <div className="nav_theme" onClick={() => setDarkMode(!darkMode)}>
          <i className={darkMode ? "uil uil-sun" : "uil uil-moon"}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
