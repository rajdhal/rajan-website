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
                startDate: "Jun 2025",
                endDate: "Present",
                skills: ["Java", "Spring Boot", "AWS", "Kubernetes", "Docker", "REST APIs", "Microservices", "PostgreSQL", "Git"],
            },
            {
                title: "Associate Software Engineer",
                startDate: "Apr 2024",
                endDate: "Jun 2025",
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
                startDate: "Sep 2023",
                endDate: "Dec 2023",
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
                startDate: "Oct 2021",
                endDate: "Aug 2022",
                skills: [],
            },
        ],
    },
];

const calculateDuration = (startDate, endDate) => {
    const parseDate = (dateStr) => {
        if (dateStr === "Present") return new Date();
        const [month, year] = dateStr.split(" ");
        const monthIndex = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(month);
        return new Date(parseInt(year), monthIndex);
    };

    const start = parseDate(startDate);
    const end = parseDate(endDate);

    // Calculate months difference and add 1 to make it inclusive of both start and end months
    let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0) {
        return `${years} yr ${remainingMonths} mos`;
    } else if (years > 0) {
        return `${years} yr`;
    } else {
        return `${remainingMonths} mos`;
    }
};

const Experience = () => {
    return (
        <section className="experience section" id="experience">
            <h2 className="section_title reveal">Experience</h2>
            <span className="section_subtitle reveal">My Professional Journey</span>

            <div className="experience_container container">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience_card reveal">
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
                                        <span className="experience_period">
                                            {role.startDate} - {role.endDate} · {calculateDuration(role.startDate, role.endDate)}
                                        </span>
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
