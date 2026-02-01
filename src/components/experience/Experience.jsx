import React from "react";
import "./experience.css";

const experiences = [
    {
        company: "Infor",
        type: "Permanent Full-time",
        location: "Canada · Remote",
        roles: [
            {
                title: "Software Engineer",
                period: "Jun 2025 - Present",
                duration: "9 mos",
                skills: ["Java", "Spring Boot", "AWS", "Kubernetes", "Docker", "REST APIs", "Microservices", "PostgreSQL", "Git"],
            },
            {
                title: "Associate Software Engineer",
                period: "Apr 2024 - Jun 2025",
                duration: "1 yr 3 mos",
                skills: ["Amazon Web Services (AWS)", "Kubernetes"],
            },
        ],
    },
    {
        company: "University of Windsor",
        type: "Contract Part-time",
        location: "Windsor, Ontario, Canada · On-site",
        roles: [
            {
                title: "Teaching Assistant",
                period: "Sep 2023 - Dec 2023",
                duration: "4 mos",
                skills: [],
            },
        ],
    },
    {
        company: "Best Buy Canada",
        type: "Permanent Part-time",
        location: "Windsor, Ontario, Canada · On-site",
        roles: [
            {
                title: "Sales Advisor",
                period: "Oct 2021 - Aug 2022",
                duration: "11 mos",
                skills: [],
            },
        ],
    },
];

const Experience = () => {
    return (
        <section className="experience section" id="experience">
            <h2 className="section_title">Experience</h2>
            <span className="section_subtitle">My Professional Journey</span>

            <div className="experience_container container">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience_card">
                        <div className="experience_header">
                            <h3 className="experience_company">{exp.company}</h3>
                            <span className="experience_type">{exp.type}</span>
                            <span className="experience_location">{exp.location}</span>
                        </div>

                        <div className="experience_roles">
                            {exp.roles.map((role, roleIndex) => (
                                <div key={roleIndex} className="experience_role">
                                    <div className="experience_timeline">
                                        <span className="experience_dot"></span>
                                        {roleIndex < exp.roles.length - 1 && <span className="experience_line"></span>}
                                    </div>
                                    <div className="experience_content">
                                        <h4 className="experience_title">{role.title}</h4>
                                        <span className="experience_period">{role.period} · {role.duration}</span>
                                        {role.skills.length > 0 && (
                                            <div className="experience_skills">
                                                {role.skills.slice(0, 3).map((skill, i) => (
                                                    <span key={i} className="experience_skill">{skill}</span>
                                                ))}
                                                {role.skills.length > 3 && (
                                                    <span className="experience_skill">+{role.skills.length - 3} more</span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
