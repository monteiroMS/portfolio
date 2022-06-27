import React from 'react';
import styles from '../styles/Footer.module.css';
import github from '../images/github.png';
import whatsapp from '../images/whatsapp.png';
import linkedin from '../images/linkedin.webp';

function Footer() {
  return (
    <footer className={ styles.container }>
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
          href="https://contate.me/monteiro.ms"
          target="_blank"
          rel="noreferrer"
          className={ styles.link }>
          <img
            src={ whatsapp }
            alt="whatsapp logo"
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
    </footer>
  );
}

export default Footer;