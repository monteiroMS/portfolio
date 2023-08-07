import React from "react";
import styles from "./styles.module.css";

function Contact() {
  return (
    <main className={styles.container}>
      <span className={styles.infoContainer}>
        <h1>Contato</h1>
        <span>
          <a href="mailto:matheuschran@hotmail.com">
            E-mail: matheuschran@hotmail.com
          </a>
          <a href="https://contate.me/monteiro.ms">Telefone: (47) 99642-9380</a>
        </span>
      </span>
    </main>
  );
}

export default Contact;
