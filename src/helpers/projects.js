import trybetunes from "../images/trybetunes.png";
import trybewallet from "../images/trybewallet.png";
import store from "../images/store.png";
import trivia from "../images/trivia.png";
import desafioNG from "../images/desafioNG.jpeg";
import desafioMOVISIS from "../images/desafioMOVISIS.png";

const projects = [
  {
    name: "Carteira Digital",
    image: desafioNG,
    summary:
      "Aplicação construída para o processo seletivo da NG.CASH. É uma aplicação fullstack dockerizada, com front-end em React, back-end em Node utilizando Sequelize e Express e banco de dados PostgreSQL. Simula uma carteira digital que permite fazer transferência de valores entre usuários.",
    link: "https://github.com/monteiroMS/desafio-ng-fullstack",
  },
  {
    name: "Loja Online",
    image: desafioMOVISIS,
    summary:
      "Aplicação construída para o processo seletivo da MOVISIS. É uma aplicação front-end que utiliza React com ContextAPI, consome a API do Mercado Livre e simula uma loja online. Salva algumas informações no local storage e permite buscas e reordenação dos produtos exibidos.",
    link: "https://github.com/monteiroMS/desafio-movisis",
  },
  {
    name: "TrybeTunes",
    image: trybetunes,
    summary:
      "Aplicação construída utilizando React e React Router. Consome a API do iTunes, e permite que o usuário pesquise por álbuns de música, escute prévias das músicas e favorite as que mais gostou.",
    link: "https://monteiroms.github.io/trybetunes",
  },
  {
    name: "TrybeWallet",
    image: trybewallet,
    summary:
      "Aplicação construída utilizando React, React Router e Redux. Consome uma API que retorna valores de algumas moedas convertidas para o real. A aplicação permite que o usuário registre despesas em diversas moedas, podendo editá-las ou excluí-las posteriormente.",
    link: "https://monteiroms.github.io/trybewallet",
  },
  {
    name: "Online Store",
    image: store,
    summary:
      "Aplicação construída em grupo utilizando React e React Router. Para organização das tarefas foram utilizadas as metodologias ágeis, como o Kanban. A aplicação consome a API do Mercado Livre e simula toda a experiência de compra de uma loja online.",
    link: "https://monteiroms.github.io/store",
  },
  {
    name: "Trivia Game",
    image: trivia,
    summary:
      "Aplicação construída em grupo utilizando React para a construção da interface, Redux para a manipulação do estado geral da aplicação e consome uma API que retorna as perguntas e respostas. Permite que o jogador configure o jogo como preferir, responda as perguntas e marque pontos e no final possa ver sua classificação no ranking.",
    link: "https://monteiroms.github.io/trivia/",
  },
];

export default projects;
