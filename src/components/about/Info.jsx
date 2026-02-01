import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="uil uil-briefcase-alt about_icon"></i>
        <h3 className="about_title">Engineer</h3>
        <span className="about_subtitle">
          Software Engineer at Infor
        </span>
      </div>

      <div className="about_box">
        <i className="uil uil-graduation-cap about_icon"></i>
        <h3 className="about_title">Graduate</h3>
        <span className="about_subtitle">
          B.CS Honours, University of Windsor
        </span>
      </div>

      <div className="about_box">
        <i className="uil uil-github-alt about_icon"></i>
        <h3 className="about_title">Open Source</h3>
        <span className="about_subtitle">
          Contributor and advocate
        </span>
      </div>
    </div>
  );
};

export default Info;
