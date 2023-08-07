import React from "react";
import styles from "./styles.module.css";
import LinkButton from "../Header/LinkButton";
import Social from "../Social";

function Header() {
  return (
    <header className={styles.container}>
      <Social className={styles.social} />
      <nav className={styles.menu}>
        <LinkButton to="/" name="Início" />

        <LinkButton to="/tecnologias" name="Tecnologias" />

        <LinkButton to="/projetos" name="Projetos" />

        <LinkButton to="/contato" name="Contato" />
      </nav>
    </header>
  );
}

export default Header;
