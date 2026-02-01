import React from "react";

const ToolsAndPlatforms = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Cloud & DevOps</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">AWS</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Kubernetes</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Docker</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">GitLab CI/CD</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndPlatforms;
