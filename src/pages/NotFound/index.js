import React from "react";
import LinkButton from "../../components/Header/LinkButton";

function NotFound() {
  return (
    <main>
      <h1>Página não encontrada</h1>
      <LinkButton to="/" name="Voltar para a página inicial" />
    </main>
  );
}

export default NotFound;
