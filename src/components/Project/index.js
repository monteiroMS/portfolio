import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Project({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      key={project.name}
      className={styles.container}
    >
      <img
        src={project.image}
        alt={`tela inicial do projeto ${project.name}`}
        loading="lazy"
      />
      <span>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
      </span>
      <p className={styles.goButton}>Ir para a aplicação</p>
    </a>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    summary: PropTypes.string,
    link: PropTypes.string,
  }),
};

export default Project;
