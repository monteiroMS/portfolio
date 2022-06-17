import React from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import styles from '../styles/Contact.module.css';
import Footer from '../components/Footer';

function Contact({ history: { location: { pathname } } }) {
  return (
    <main className={ styles.container }>
      <Header pathname={ pathname }/>
      <span className={ styles.infoContainer }>
        <h1>Contato</h1>
        <span>
          <a href="mailto:matheuschran@hotmail.com">E-mail: matheuschran@hotmail.com</a>
          <a href="https://contate.me/monteiro.ms">Telefone: (47) 99642-9380</a>
        </span>
      </span>
      <Footer />
    </main>
  );
}

Contact.propTypes = {
  pathname: PropTypes.string,
};

Contact.defaultProps = {
  pathname: '/contact',
};

export default Contact;
 