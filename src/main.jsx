import React from 'react'
import ReactDOM from 'react-dom/client'

//Importa de dentro da biblioteca o ThemeProvider - Que gerencia do tema da nossa aplicação
import { ThemeProvider } from 'styled-components'

//Importar as configurações de estilizações globais da minha aplicação
import GlobalStyles from './styles/global'

//Importando o meu contexto
import { AuthProvider } from './hooks/auth'


//Agora tenha que importar o tema em si
import theme from "./styles/theme"



import { Routes } from './routes'
//O caminho da importação foi sendo alterado com as minhas confirmações ao mudar o local da minha função que está sendo exportada
//Existem dois tipo de importação:
//Nomeada: Quando especificamos a importação/exportação - Desta forma funciona como uma desestruturação
//Default: Quado importamos/exportamos a função ou arquivo como um todo

//Ferramenta para manipular os elemento da DOM neste caso o HTML e  CSS
//Pegue o elemento com o id root - apartir disto será renderizado um conteúdo
//O conteúdo que vem deste <SigIn />
//Temos que envolver toda a nossa aplicação dentro de ThemeProvider - informar enfim o tema que também foi importado
//Colocamos o global styles também envolvido pelo tema - pois ele irá utilizar deles - note que ele fechou em si msm
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <AuthProvider>
          <Routes /> 
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

//Tenho que utilizar o contexto por volta de todas as rotas - pois desta forma todas as minhas rotas e api tem acesso ao meu contexto

//Da seguinte forma estou utilizando para simplificar que:
//.Provider value={{email: "rodrigo@email.com"
//Estou provendo para todas as minhas rotas o valor de um email - que poderá ser utilizado livremente