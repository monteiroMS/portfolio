import React, { Component } from 'react';
import Header from '../components/Header';
import foto from '../images/fotoPerfil.png';
import styles from '../styles/Home.module.css';
import PropTypes from 'prop-types';
import techs from '../helpers/techs';

class Home extends Component {
  render() {
    const { history: { location: { pathname } } } = this.props;
    return (
      <main className={ styles.container }>
        <Header pathname={ pathname }/>
        <span className={ styles.content }>
          <img
            src={ foto }
            alt="fundo azul, foto de perfil de matheus"
            className={ styles.profilePic }
          />
          <span className={ styles.infoContainer }>
            <h1>Olá!</h1>
            <h1>Eu sou Matheus Monteiro, </h1>
            <h1>desenvolvedor Front-End</h1>
            <span className={ styles.techContainer }>
              {
                techs.map(({ name, image }) => (
                  <span key={ name } className={ styles.tech }>
                    <img
                      src={ image }
                      alt={`${name} logo`}
                      className={ styles.techLogo }
                    />
                    <p>{ name }</p>
                  </span>
                ))
              }
            </span>
          </span>
        </span>
      </main>
    );
  }
}

Home.propTypes = {
  pathname: PropTypes.string,
};

Home.defaulProps = {
  pathname: '/',
}

export default Home;
