//Importar ícone - PLUS + Pesquisa
import { FiPlus } from 'react-icons/fi'

import { Container, Brand, Sale, Content, NewNote, NewTransfer } from './styles'

import { Extract } from "../../components/Extract"

import { Header } from "../../components/Header"

import { Section } from "../../components/Section"

import { useEffect, useState } from 'react'

import { api } from "../../services/api"


export function Home() {
  //Extratos
  const [extract, setExtract] = useState([])

  const [balance, setBalance] = useState(0)

  useEffect(() => {
    async function handleExtract() {
      const balance = await api.get(`/extract`)
      const last = balance.data.length - 1
      const lastBalance = balance.data[last].currentBalance.toFixed(2)
      // console.log(lastBalance)
      setBalance(lastBalance)
    }
    handleExtract()
  }, [extract])

  //Quando mudar o conteúdo do search
  useEffect(() => {
    async function fetchExtract() {
      //Vou apresentar as notas a partir da pesquisa da descrição
      const response = await api.get(`/extract`)
      //Aqui para atualizar os extratos do cliente
      setExtract(response.data)

    }
    //Executando a função
    fetchExtract()


  }, [])

  return  (
    <Container>
      <Brand>
        <h1>BankIn</h1>
      </Brand>

      <Header>
      </Header>

      <Sale>
        <div>
          <p>Saldo:</p>
          <span>R$ {balance}</span>
        </div>
      </Sale>

      <Content>
        <Section title="Meu extrato">
          {
            extract.map(debt => (
              <Extract
                key={String(debt.id)}
                data={debt}
              />
            ))
          }

        </Section>

      </Content>

      <NewTransfer to="/transfer">
        <FiPlus/>
        Transferência
      </NewTransfer>

      <NewNote to="/new">
        <FiPlus/>
        Lançar Débito
      </NewNote>
    </Container>
  )
}