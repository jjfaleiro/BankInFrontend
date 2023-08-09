//Hock - Hooks são funções que permitem a você “ligar-se” aos recursos de state (permite que componentes criem e gerenciem seus próprios dados.)  e ciclo de vida do React a partir de componentes funcionais.
//Importando funcionalidade que armazena estados neste caso armazenar na memória temporariamente login email e senha para conseguirmos cadastrar o usuário
import { useState } from "react"

import { FiUser, FiMail, FiLock } from "react-icons/fi"

//Agora vou integrar a conexão de integração do front-bank (Feita por meio do axios)
import { api } from '../../services/api'

import { Link, useNavigate } from "react-router-dom"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from "./styles";

export function SignUp() {
  //E assim vamos executar os hock para ele armazenar os estados
  //Precisamos passar entre os parenteses o estado inicial deste hock que no caso será uma par de "" - indicando que irá inicializar como sendo um texto vazio
  //Dentro da chaves - temos que ter o estado(tipo variável) e em seguida a função que atualiza este estado em especifico - Boa prática é utilizar desta forma setNomeDoEstado
  const [name, setName] = useState("")
  const [cpf, setCPF] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //Instanciando o useNavigation - que é responsável por fazer navegação dentro da aplicação
  //Não estava redirecionando se estivesse fora da função
  const navigate = useNavigate()

  //Ou seja função que lidar (Handle) com Cadastro de usuários - ela será executada toda vez que onClick (Ao clicar no botão da tela de SignUp)
  function handleSignUp() {

    if(!name || !cpf || !email || !password) {
      return alert("Necessário preencher todos os campos")
    } 
    //Ou seja estou utilizando o AXIOS para fazer um método HTTP dentro do meu frontend - para utilizar o método post usando a rota users - enviados os dados capturados pelo hock/state entre colchetes
    api.post("/users", {name, cpf, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso")
      //Assim que o usuário se cadastrar quero redireciona-lo para a página de login
      navigate("/")
    }) //Executa de forma assíncrona se DEU TUDO CERTO
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
        //Ou seja capturo o erro - depois verifico se existe dentro do meu backend uma resposta atrelada ao erro - caso exista eu faço um alert com a mensagem que está retornando como erro lá no backend e a imprimo aqui no front
      } else {
        alert("Não foi possível cadastrar")
        //Caso o tipo do erro não tenha sido tratado lá no backend
      }
    }) //Executa de forma assíncrona se DEU TUDO ERRADO
    //THEN E CATCH estão sendo utilizados ao invés de usar o async await (só para exemplificar de outra forma função assíncronas)
  }

  return (
    <Container>
      <Background/>

      <Form>
        <h1>BankIn</h1>
        <p>O banco que banca de verdade</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} onChange={e => setName(e.target.value)}/>

        <Input placeholder="CPF" type="text" icon={FiUser} onChange={e => setCPF(e.target.value)}/>

        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>

        <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}/>

        <Button title="Cadastrar" type="button" onClick={handleSignUp}/>

        <Link to="/">Voltar para o login</Link>
      </Form>

    </Container>
  )
}

//Para cada input haverá uma função chamada onChange (Ou seja a cada vez que houver alteração) - iremos armazenar um event ou simplesmente "e"
//Fazendo da forma abaixo funciona da seguinte forma
//Faça uma arrow function apartir do evento neste caso sendo quando algo for alterado e execute a função do Hock passando para dentro da função o valor(value) capturado(target) do evento
/*
Da seguinte forma:
onChange={e => setName(e.target.value)} 
*/