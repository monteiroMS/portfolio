import trybetunes from '../images/trybetunes.png';
import trybewallet from '../images/trybewallet.png';
import store from '../images/store.png';

const projects = [
  {
    name: 'TrybeTunes',
    image: trybetunes,
    summary: 'Aplicação construída utilizando React e React Router. Consome a API do iTunes, e permite que o usuário pesquise por álbuns de música, escute prévias das músicas e favorite as que mais gostou.',
    link: 'https://monteiroms.github.io/trybetunes',
  },
  {
    name: 'TrybeWallet',
    image: trybewallet,
    summary: 'Aplicação construída utilizando React, React Router e Redux. Consome uma API que retorna valores de algumas moedas convertidas para o real. A aplicação permite que o usuário registre despesas em diversas moedas, podendo editá-las ou excluí-las posteriormente.',
    link: 'https://monteiroms.github.io/trybewallet',
  },
  {
    name: 'Online Store',
    image: store,
    summary: 'Aplicação construída em grupo utilizando React e React Router. Para organização das tarefas foram utilizadas as metodologias ágeis, como o Kanban. A aplicação consome a API do Mercado Livre e simula toda a experiência de compra de uma loja online.',
    link: 'https://monteiroms.github.io/store',
  },
];

export default projects;
