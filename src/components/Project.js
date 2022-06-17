import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Project.module.css';

class Project extends Component {
  render() {
    const { name, image, summary, link } = this.props;
    return (
      <a
        href={ link }
        target="_blank"
        rel="noreferrer"
        key={ name }
        className={ styles.container }
      >
        <img
          src={ image }
          alt={ `tela inicial do projeto ${ name }` }
        />
        <span>
          <h1>{ name }</h1>
          <p>{ summary }</p>
        </span>
        <p className={ styles.goButton }>Ir para a aplicação</p>
      </a>
    );
  }
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Project;
