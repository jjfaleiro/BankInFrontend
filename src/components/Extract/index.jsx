import { redirect } from "react-router-dom";
import { Container } from "./styles";

// import { Tag } from '../Tag'

export function Extract({data, ...rest}) {
  // const numberE = -50
  const negative = Math.sign(data.debts) === -1;


  // const resultCor = mudaDeCor(numberY)


  return(
    <Container {...rest}>


      <header>Saldo anterior: {data.previousBalance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</header>
      <main>
      <div>
        {negative === true ? <p id="negative">{data.debts.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p> : <p id="positive">{data.debts.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p> }
        <p>{data.description}</p>
        <p>{data.created_at}</p>
      </div>
      </main>
      <footer>Saldo atual: {data.currentBalance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</footer>

    </Container>
  )
}
//Configurar data
//.toLocaleString('pt-BR', { timezone: 'UTC' })

/*<header>{data.previousBalance}</header>
      <div>
        <p>{data.id}</p>
        <p>{data.debts}</p>
        <p>{data.description}</p>
        <p>{data.created_at}</p>
      </div>
      <footer>{data.currentBalance}</footer> */