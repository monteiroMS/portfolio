import React from "react";
import foto from "../../images/fotoPerfil.png";
import styles from "./styles.module.css";

function Home() {
  return (
    <main className={styles.container}>
      <span className={styles.content}>
        <img
          src={foto}
          alt="fundo azul, foto de perfil de matheus"
          className={styles.profilePic}
          loading="lazy"
        />
        <span className={styles.infoContainer}>
          <h1>Olá!</h1>
          <h1>Eu sou Matheus Monteiro,</h1>
          <h1>desenvolvedor Web Full Stack.</h1>
          <p>
            Programo em Typescript e conheço um pouco de Python e Java. Meu
            trabalho é desenvolver soluções que proporcionem boa experiência e
            eficiência ao usuário.
          </p>
        </span>
      </span>
    </main>
  );
}

export default Home;
