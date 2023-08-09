import { Link } from "react-router-dom"

import { FiDollarSign } from "react-icons/fi";

import { useNavigate } from "react-router-dom"

import { Header } from "../../components/Header"

import { Input } from "../../components/Input"


import { Textarea } from "../../components/Textarea"

import { Button } from "../../components/Button"

import { Container, Form } from "./styles"

import { useState } from "react"

import { api } from "../../services/api"

export function New() {
  //Lógica da criação do meus extratos
  //Estados
  const [debts, setDebts] = useState(0)
  const [description, setDescription] = useState("")


  //Navigate para que assim que o extrato seja criado a usuário seja redirecionado a home
  const navigate = useNavigate()

  //Função para criar extrato
  async function handleNewExtract(){
    if(!debts || !description)  {
      return alert("Necessário informa valor e descrição para lançamento!!!")
    }

    //Rota
    await api.post('/extract', {
      debts,
      description
    })

    alert("Extrato criado com sucesso!!!")
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
            <h1>Lançamentos</h1>
            <Link
              onClick={handleBack}
            >
              Voltar
            </Link>
          </header>

          <Input 
            icon={FiDollarSign}
            placeholder="Valor do débito"
            onChange={e => setDebts(-parseInt(e.target.value))}
          />
          <Textarea
           placeholder="Descrição do débito"
           onChange={e => setDescription(e.target.value)}
          />

          {/* <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem isNew placeholder="Novo link"/>
          </Section >
            
          <Section title="Marcadores">
            <div className="tags">
             <NoteItem value="react"/>
             <NoteItem isNew placeholder="Nova tag"/>
            </div>
          </Section> */}
          <Button 
            title="Confirmar"
            type="button" 
            onClick={handleNewExtract}
          />
        </Form>
      </main>
    </Container>
  )
}