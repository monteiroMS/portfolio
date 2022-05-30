import React, { Component } from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import styles from '../styles/Contact.module.css';

class Contact extends Component {
  render() {
    const { history: { location: { pathname } } } = this.props;
    return (
      <main className={ styles.container }>
        <Header pathname={ pathname }/>
        <span className={ styles.infoContainer }>
          <h1>Contato</h1>
          <span>
            <p>E-mail: matheuschran@hotmail.com</p>
            <p>Telefone: (47) 99642-9380</p>
          </span>
        </span>
      </main>
    );
  }
}

Contact.propTypes = {
  pathname: PropTypes.string,
};

Contact.defaultProps = {
  pathname: '/contact',
};

export default Contact;
 