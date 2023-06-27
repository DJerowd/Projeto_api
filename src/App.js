import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListagemPage from './pages/ListagemPage';
import DetalhesPage from './pages/DetalhesPage';
import Listagem from './components/Listagem';
import './components/styles.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListagemPage />} />
        <Route path="/detalhes/:nomeDigimon" element={<DetalhesPage />} />
      </Routes>
    </Router>
  );
};

export default App;


/*Projeto: Desenvolvimento de uma aplicação web com inte-gração com API externa:
Requisitos gerais:
• Desenvolver a aplicação utilizando a biblioteca React e a linguagem de
programação JavaScript
• Ter 2 páginas, sendo ao menos uma delas de listagem com paginação
• Desenvolver a aplicação utilizando conceitos de componentização. Não
colocar todo o código da aplicação em um único arquivo
• Obrigatoriamente utilizar as bibliotecas:
– React Router Dom
– Axios
• Caso desejado, utilizar biblitecas de componentes (ChackraUI ou MUI)
• O projeto não precisa ser uma obra de arte do CSS, mas deve ser ao
mínimo “bonitinho”
• Utilizar uma das APIS listadas abaixo para realizar a requisição dos dados.
Caso desejem utilizar outra API, me enviar/mostrar em aula para que eu
possa avaliar.

Tela de listagem
• Primeira tela a ser acessada no sistema
• Pode ser uma listagem em forma de tabela ou cards
• Ter paginação
• Exibir pelo menos 2 informações contidas no retorno da API
Segunda tela
• Para a segunda tela vocês podem implementar como quiserem, pode ser
outra página de listagem, página de detalhes de alguma coisa, página com
um formulário, etc.
• Os requisitos para essa tela são:
– As informações exibidas devem vir da API
– Uma dessas informações deve ser uma imagem

Lista de APIS disponíveis para uso
• Países: https://restcountries.com/#rest-countries
Links to an external site.
• Pokémon: https://pokeapi.co/ Links to an external site. 
• Filmes: https://imdb-api.com/api Links to an external site. 
• Drinks: https://www.thecocktaildb.com/api.php Links to an external site. 
• Animes: https://jikan.moe/ Links to an external site.
• Gatos: https://cataas.com/#/ Links to an external site.
• Livros: https://openlibrary.org/developers/api Links to an external site.
• Quadrinhos: https://comicvine.gamespot.com/api/
Links to an external site.
• Personagens Disney: https://disneyapi.dev/docs/1
• Yu-Gi-Oh: https://ygoprodeck.com/api-guide/
Links to an external site.
• Frutas: https://www.fruityvice.com/#3 Links to an external site.
• Receitas: https://spoonacular.com/food-api Links to an external site.
• Digimon: https://digimon-api.vercel.app/
Links to an external site.
Entrega
• O projeto deve ser entregue via GitHub. Vocês devem postar o link do
github (lembrar de deixar o repositório público) no portal.*/