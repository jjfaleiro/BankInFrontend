//Rotas após o usuário estar logado
import { Routes, Route } from "react-router-dom"

//Páginas da Aplicação
import { New } from "../pages/New"
import { Transfer } from "../pages/Transfer"
import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"

//Função que irá renderizar as páginas
export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/transfer" element={<Transfer/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  )
}

//Details precisa do código da nota para renderizar ela