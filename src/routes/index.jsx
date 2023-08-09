import { BrowserRouter } from "react-router-dom";

//Importando o auth
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  //Capturando usuário para verificar se foi ou não logado
  const { user } = useAuth()

  return(
    <BrowserRouter>
      {user ? <AppRoutes/> : <AuthRoutes/>}
    </BrowserRouter>
  )
}

//Ternário
//Usuário existe? Caso sim App, senão Auth
//{user ? <AppRoutes/> : <AuthRoutes/>}