import React from "react";
import "./Projects.css"; // Ensure this file is updated

const projects = [
  {
    id: 1,
    title: "Expense Tracker",
    tags: ["React", "Firebase", "CSS"],
    link: "https://expensy-gamma.vercel.app",
  },
  {
    id: 2,
    title: "Clothing Store(UI-UX)",
    tags: ["Figma", "UI-UX", "Graphic Designing"],
    link: "https://drive.google.com/drive/folders/1Th1pYeB0xJQiWMeACd2otst23Tj_SZjN?usp=sharing",
  },
  {
    id: 3,
    title: "Blogging Website",
    tags: ["MERN", "Authentication", "Netlify"],
    link: "https://ruex64blogs.netlify.app/",
  },
  {
    id: 4,
    title: "Recipie Search",
    tags: ["JavaScript", "API", "TheMealDB"],
    link: "https://ruex64.github.io/JsRecipieApp/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
