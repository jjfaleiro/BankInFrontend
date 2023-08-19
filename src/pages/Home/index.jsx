//Importar ícone - PLUS + Pesquisa
import { FiSend, FiDollarSign } from 'react-icons/fi'

import { Container, Brand, Sale, Content, NewNote, New } from './styles'

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
      const lastBalance = balance.data[last].currentBalance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
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
          <span>{balance}</span>
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
            )).reverse()
          }

        </Section>

      </Content>

      <New>
        <NewNote to="/transfer">
          <FiSend/>
          <p>Transferência</p>
        </NewNote>

        <NewNote to="/new">
          <FiDollarSign/>
          <p>Débito</p>
        </NewNote>
      </New>
    </Container>
  )
}