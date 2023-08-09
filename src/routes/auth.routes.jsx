//Rotas antes do login do usuário
import { Routes, Route } from "react-router-dom"

//Páginas da Aplicação
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"
import { Deposit } from "../pages/Deposit"

//Função que irá renderizar as páginas
export function AuthRoutes() {
  return(
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/deposit" element={<Deposit/>}/>
    </Routes>
  )
}

//Details precisa do código da nota para renderizar ela