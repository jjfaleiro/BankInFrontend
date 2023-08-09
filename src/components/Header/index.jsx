//Importar da biblioteca de ícones do react - ri (é uma das varias bibliotecas que você pode escolher de dentro da biblioteca do react) - e estou desestruturando um icone de ligas e desligar
import { RiShutDownLine } from "react-icons/ri"

//Agora tenho que importar a função signOut (Para ligar ela ao botão de sair) - então primeiro tenha que importar o useAuth (que está armazenando minha função de signIn e signOut)
import { useAuth } from "../../hooks/auth";


import { Container, Profile, Logout } from './styles'

import { api } from "../../services/api"

import { useNavigate } from "react-router-dom";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";


export function Header() {
  //Importando de forma desestruturada juntamente com um estanciamento da classe
  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  //Função para voltar a tela de login automaticamente após deslogar em qualquer das páginas
  function handleSignOut(){
    //Ou seja volte para a tela inicial do Auth que é o contexto onde não estamos autenticados
    navigate("/")
    //E depois apague os dados de autenticação do localStorage
    signOut()
  }

  //Capturando endereço da imagem ou imprimindo imagem padrão de usuário
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return(
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={`Foto de perfil do usuário ${user.name}`}
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout type="button" onClick={handleSignOut}> 
        <RiShutDownLine/>
      </Logout>
    </Container>
  );
}

// <RiShutDownLine/> = meu ícone em si pesquise em (https://react-icons.github.io/react-icons/search?q=shutdownline)