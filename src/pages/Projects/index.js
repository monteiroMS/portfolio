import React from "react";
import projects from "../../helpers/projects";
import Project from "../../components/Project";
import styles from "./styles.module.css";

function Projects() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Projetos</h1>
      <span className={styles.projects}>
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </span>
    </main>
  );
}

export default Projects;
