import React, { useState, useEffect, useRef } from "react";
import "./about.css";
import ProfileImage from "../../assets/me.webp";
import Info from "./Info";
import Resume from "../../assets/rajan-resume.pdf";

const About = () => {
  const [showResume, setShowResume] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imageLayerRef = useRef(null);

  const resumeDownloadUrl = Resume;

  const openResume = () => {
    // Open resume directly for download/view
    window.open(Resume, "_blank");
  };

  const closeResume = () => setShowResume(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowResume(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const imageLayer = imageLayerRef.current;
    if (!imageLayer) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.4],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.4);
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(imageLayer);

    return () => {
      observer.unobserve(imageLayer);
    };
  }, []);

  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My Journey</span>

      <div className="about_container container grid">
        <div className="image_layer" ref={imageLayerRef}>
          <img
            src={ProfileImage}
            alt="Rajan Dhaliwal"
            className={`subject_img ${isVisible ? "scroll-animated" : ""}`}
          />
        </div>

        <div className="about_data">
          <Info />
          <p className="about_description">
            I like turning ideas into working systems, contributing to open source, and learning something new with every project.
          </p>

          <div className="about_buttons">
            <button onClick={openResume} className="button button--flex">
              <span className="button-content">
                My Resume <i className="uil uil-file-alt"></i>
              </span>
            </button>

            <a
              href="https://www.linkedin.com/in/rajan-dhaliwal1/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--flex"
            >
              <span className="button-content">
                LinkedIn <i className="uil uil-linkedin-alt"></i>
              </span>
            </a>

            <a
              href="https://github.com/rajdhal"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--flex"
            >
              <span className="button-content">
                GitHub <i className="uil uil-github-alt"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      {showResume && (
        <div className="resume-viewer-overlay">
          <a
            href={resumeDownloadUrl}
            className="resume-download-button fixed-left"
            download="Rajan_Dhaliwal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-import"></i> Download
          </a>

          <button
            onClick={closeResume}
            className="resume-close-button fixed-right"
          >
            <i className="uil uil-times"></i>
          </button>

          <div className="resume-preview-wrapper">
            <iframe
              src={resumeDownloadUrl}
              className="resume-iframe"
              allowFullScreen
              title="My Resume"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
