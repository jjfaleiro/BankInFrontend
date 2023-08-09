//Preciso armazenar ESTADO para fazer assim armazenar estas informações
import { useState } from "react";

import { Container, Form, Background } from "./styles";
import { FiUser, FiLock } from "react-icons/fi"

import { Link } from "react-router-dom"

//Importando literalmente a configuração do CONTEXTO da nossa aplicação
import { useAuth } from "../../hooks/auth";


import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  //Estados - useState
  const [cpf, setCPF] = useState("")
  const [password, setPassword] = useState("")


  //Agora irei executar a função useAuth que irá criar a lógica de user meu AuthContext dentro da aplicação
  //const data = useAuth()
  
  //Desestruturar a função de autenticação signIn de dentro do meu Contexto
  const { signIn } = useAuth()
  
  //Para testar - Que utilizando o contexto consigo acessar os dados do meu usuário de qualquer lugar da minha aplicação
  //console.log("Meu CONTEXTO => ", data)

  //Uma boa prática e separar funções que são execuções que são executas pela ação do usuário - que vair executar a mesma coisa que foi herdado do contexto - handle (lidar)
  function handleSignIn() {
    signIn({cpf, password})
  }



  return (
    <Container>
      <Form>
        <h1>BankIn</h1>
        <p>O banco que banca de verdade</p>
        <h2>Faça seu login</h2>

        <Input placeholder="CPF" type="text" icon={FiUser} onChange={e => setCPF(e.target.value)}/>

        <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}/>

        <Button title="Entrar" type="button" onClick={handleSignIn}/>

        <Link to="/register">Criar conta</Link>
        <Link to="/deposit">Depósito</Link>
      </Form>

      <Background/>
    </Container>
  )
}