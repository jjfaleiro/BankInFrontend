//Configurando o AXIOS para Projeto consumir requisições HTTP
//Importando
import axios from 'axios'

//Já exportando diretamente
export const api = axios.create({
  //Literalmente a base da URL para acessar nosso backend-servidor
  //URL do baseURL (tem que ser maiúscula)
  baseURL: 'http://localhost:3333/'
})

//'https://bankin-api.onrender.com'