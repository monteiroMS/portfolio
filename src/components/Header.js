import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.webp';

function Header({ pathname }) {
  return (
    <header className={ styles.container }>
      <nav className={ styles.social }>
        <a
          href="https://github.com/monteiroMS"
          target="_blank"
          rel="noreferrer"
          className={ styles.link }>
          <img
            src={ github }
            alt="github logo"
          />
        </a>
        <a
          href="https://www.instagram.com/m.smonteiro/"
          target="_blank"
          rel="noreferrer"
          className={ styles.link }>
          <img
            src={ instagram }
            alt="instagram logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/monteiroms/"
          target="_blank"
          rel="noreferrer"
          className={ styles.link }>
          <img
            src={ linkedin }
            alt="linkedin logo"
          />
        </a>
      </nav>
      <nav className={ styles.menu }>
        { 
          pathname === '/'
            ? <Link to="/" className={ `${styles.link} ${styles.here}` }>Página inicial</Link>
            : <Link to="/" className={ styles.link }>Página inicial</Link>
        }
        { 
          pathname === '/projects'
            ? <Link to="/projects" className={ `${styles.link} ${styles.here}` }>Projetos</Link>
            : <Link to="/projects" className={ styles.link }>Projetos</Link>
        }
        { 
          pathname === '/contact'
            ? <Link to="/contact" className={ `${styles.link} ${styles.here}` }>Contato</Link>
            : <Link to="/contact" className={ styles.link }>Contato</Link>
        }
      </nav>
    </header>
  );
}

export default Header;
