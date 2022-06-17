import React from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import projects from '../helpers/projects';
import Project from '../components/Project';
import styles from '../styles/Projects.module.css';
import Footer from '../components/Footer';

function Projects({ history: { location: { pathname } } }) {
  return (
    <main className={ styles.container }>
      <Header pathname={ pathname }/>
      <h1 className={ styles.title }>Projetos</h1>
      <span className={ styles.projects }>
        {
          projects.map(({ name, image, summary, link }) => (
            <Project
              key={ name }
              name={ name }
              image={ image }
              summary={ summary }
              link={ link }
            />
          ))
        }
      </span>
      <Footer />  
    </main>
  );
}

Projects.propTypes = {
  pathname: PropTypes.string,
};

Projects.defaulProps = {
  pathname: '/projects',
}

export default Projects;
