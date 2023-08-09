import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom"

import { FiUser, FiLock, FiDollarSign} from "react-icons/fi";

import { Header } from "../../components/Header"

import { Input } from "../../components/Input"

import { Textarea } from "../../components/Textarea"

import { Button } from "../../components/Button"

import { Container, Form } from "./styles"

import { useState } from "react"

import { api } from "../../services/api"

export function Transfer() {
  //Lógica da criação do meus extratos
  //Estados
  const [destinationAccount, setDestinationAccount] = useState(0)
  const [recipientCPF, setRecipientCPF] = useState("")
  const [value, setValue] = useState(0)
  const [password, setPassword] = useState("")

  //Navigate para que assim que o extrato seja criado a usuário seja redirecionado a home
  const navigate = useNavigate()

  //Função para criar extrato
  async function handleNewTransfer(){
    if(!destinationAccount || !recipientCPF || !value || !password)  {
      return alert("Necessário informa todos os campos para efetuar transferência!!!")
    }

    //Rota
    await api.put('/extract', {
      destinationAccount,
      recipientCPF,
      value,
      password
    })

    alert("Transferência executada com sucesso!!!")
    //Redirecione para HOME
    navigate(-1) //Se colocar só "/" (Você adiciona uma camada no histórico da aplicação) - o -1 (Serve para voltar a anterior no caso no Histórico)
  }

  async function handleBack() {
    navigate(-1)
  }
  
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Transferência</h1>
            <Link
              onClick={handleBack}
            >
              Voltar
            </Link>
          </header>

          <Input 
            icon={FiUser}
            placeholder="Conta destino"
            onChange={e => setDestinationAccount(parseInt(e.target.value))}
          />
          <Input 
            icon={FiUser}
            placeholder="CPF do destinatário"
            onChange={e => setRecipientCPF(e.target.value)}
          />
          <Input 
            icon={FiDollarSign}
            placeholder="Valor a ser transferido"
            onChange={e => setValue(parseInt(e.target.value))}
          />
          <Input 
            icon={FiLock}
            type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />

          <Button 
            title="Confirmar"
            type="button" 
            onClick={handleNewTransfer}
          />
        </Form>
      </main>
    </Container>
  )
}