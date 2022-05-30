import React, { Component } from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    const { history: { location: { pathname } } } = this.props;
    return (
      <main>
        <Header pathname={ pathname }/>
        <h1>Página não encontrada</h1>
        <Link to="/">Voltar para a página inicial</Link>
      </main>
    );
  }
}

NotFound.propTypes = {
  pathname: PropTypes.string,
};

NotFound.defaultProps = {
  pathname: '/404',
};

export default NotFound;
