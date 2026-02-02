import React, { useState, useEffect, useRef } from "react";
import { projects } from "./Data";

const Works = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains("dark-theme"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  const getProjectImage = (project) => {
    if (isDarkMode && project.imageDark) {
      return project.imageDark;
    }
    return project.image;
  };

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
  };

  return (
    <>
      <div className="filter_buttons">
        {allTags.map((tag, idx) => (
          <button
            key={idx}
            className={`filter_btn ${selectedTag === tag ? "active" : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects_grid">
        {filteredProjects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="project_card"
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="project_image_wrapper">
              <img
                src={getProjectImage(project)}
                alt={project.title}
                className="project_image"
              />
            </div>

            <div className="project_info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project_tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Works;
