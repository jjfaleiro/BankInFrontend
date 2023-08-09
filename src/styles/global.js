/*Estilizações Globais*/
//Importando de dentro da biblioteca o nosso gerenciador de estilo global da aplicação
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  //Ou seja aqui estou acessando meu arquivo theme para definir que a cor do fundo da minha aplicação será um dos tokens definidos lá - observe que a sintaxe de $ funciona como uma de template literals para informar que é uma variável
  body {
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased; //Propriedade para deixar as fontes mais suaves
  }

  body, input, button, textarea {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    outline: none; //Retirar qualquer contorno
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    //Velocidade do filter brightness - hover
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    //Escurecida
    filter: brightness(0.9);
  }
`
