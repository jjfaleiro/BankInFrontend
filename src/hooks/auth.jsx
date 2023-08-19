//Introduzindo o conceito de CONTEXTO na prática
//Context API do React
import { createContext, useContext, useState, useEffect } from 'react'

//Preciso importar minha API - pois preciso dos dados cpf e senha para autenticar meu usuário na plataforma
import { api } from "../services/api"


//Ou seja vou criar uma variável já exportando com a funcionalidade de contexto do react
//Dentro do parentese temos que passar o valor padrão do nosso contexto - neste caso estamos utilizando um valor vazio
const AuthContext = createContext({})

//Vou criar uma função que recebe o componente filho(No caso por exemplo <Routes/>) - Vou tirar toda a minha lógica de provider/context do main da minha aplicação e trazendo para cá
//ATENÇÃO!!! este arquivo tem que ser jsx - por estar usando a sintaxe de jsx
function AuthProvider({children}) {
  //Preciso de estados para armazenar e alterar meu dados - onde ele começa sendo um objeto vazio
  const [data, setData] = useState({})



  //Criar uma função assíncrona de autenticação(Login aqui no caso)
  //Que necessitará de cpf e senha
  //Coloco entre chaves pois independente do objeto que estiver - ele irá extrair oa valores do cpf e da senha
  async function signIn({cpf, password}) {

    try {
      //Ou seja vou armazenar o método post na rota sessions - passando o cpf e a senha para meu backend
      const response = await api.post("/sessions", {cpf, password})
      //Desestruturar 
      const { user, token } = response.data  
      //Testar
      //console.log(user, token)

      //Vamos utilizar o localStorage para que os dados de autenticação do usuário persistam mesmo que a página seja RECARREGADA (pois os estados são zerados quando acontece isto)
      //Lembrando que o localStorage só aceita strings como chave e valor - e por estarmos passando um objeto do tipo JSON estamos usando stringify (Para converter o objeto user)
      //Utilizamos do @ como parte da chave como uma boa prática
      //Usuário
      localStorage.setItem("@bankIn:user", JSON.stringify(user))
      //Token - Não precisa converter pois já um texto
      localStorage.setItem("@bankIn:token", token)

      //Ou seja pegue a conexão com o backend - e por padrão - coloque no header a autorização do TOKEN ( do tipo Bearer)
      //Estou inserindo um TOKEN do Tipo Bearer de AUTORIZAÇÃO no Cabeçalho por Padrão - DE TODAS AS REQUISIÇÕES QUE O USUÁRIO FIZER APARTIR DE AGORA
      //api.defaults.headers.authorization = `Bearer ${token}`
      //ATUALIZAÇÃO
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      //Agora posso usar o setData para armazenar este usuário e token dentro do meu estado - entre chaves pois o valor inicial é um objeto
      setData({user, token})

    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível logar na plataforma. Tente mais tarde!")
      }
    }

  }

  //Função de logout (Sair da aplicação)
  //Aqui não preciso capturar os dados do usuário nem o token - nem validação
  async function signOut()  {
    //Aqui preciso remover os dados armazenados no localStorage - assim ao recarregar a página por exemplo os estados da aplicação são zerados - e os dados só são armazenados no localStorage novamente quando fizer a autenticação/login novamente
    //E o removeItem é a função que faz essa remoção do local storage
    //Atenção pois tem que ser exatamente a mesma chave
    localStorage.removeItem("@bankIn:token")
    localStorage.removeItem("@bankIn:user")

    //Agora vou atualizar meu estado de usuário para vazio - eu fazendo está atualização (no meu if ternário o user se torna falso sendo assim sou redirecionado para a página de login)
    setData({})

  }

  //Função para atualizar email / senha
  async function updateProfile({user, avatarFile})  {
    // console.log(user)
    //console.log(avatarFile)
    try {
      //Se existe um avatarFile
      if(avatarFile){
        // console.log(avatarFile)

        //Aqui estou utilizando uma função para formatar o avatarFile para ele ser compatível com o meu BD
        const fileUploadForm = new FormData()
        //Formatando o nome do meu arquivo de foto

        fileUploadForm.append('avatar', avatarFile)


        //Agora estou fazendo a atualização apenas da foto - com a formatação de acordo com o que o BD aceita

        const response = await api.patch("users/avatar", fileUploadForm)
        // console.log(response)

        //Agora capturar meu user com o avatar atualizado lá no BD de dados - para fazer o restante das atualizações
        user.avatar = response.data.avatar
        console.log(response.data.avatar)

      } //else { user.avatar = user.avatar}

      //console.log(user)
      //Caminho para alterar dados do cliente
      const userActual = await api.put("/users", user)
      //Caso já exista informações com está chave - ao invés de só inserir o setItem - substitui o conteúdo associado a chave

      // console.log(userActual.data)

      user = userActual.data



      localStorage.setItem("@bankIn:user", JSON.stringify(user))

      // user = JSON.parse(user)


      // api.defaults.headers.common['Authorization'] = `Bearer ${token}`



      //Atualizar também o meu estado - token sendo alterado para o token já existente no estado - repassando o mesmo
      setData({user, token: data.token})

      console.log("Passou aqui IV")

      

      alert("Perfil atualizado!!!")


    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil. Tente mais tarde!")
      }
    }
  }

  //Padrão useEffect
  //Primeira parte é uma arrow function (Que sempre será executada ao renderizar o contexto/componente - ou seja ao atualizar a página também)
  //Segunda parte é um vetor que você pode botar o estado que você quiser - Atenção caso este ESTADO passado no vetor ele se altere - ele dispara o useEffect novamente - no nosso caso vamos deixar ele vazio pois não iremos trabalhar com a atualização de um estado especifico (No caso ESTADO DEPENDENTE)
  useEffect(() => {
    //Ou seja aqui iremos capturar os dados armazenados no localStorage toda vez que a página for atualizada
    const token = localStorage.getItem("@bankIn:token")
    const user = localStorage.getItem("@bankIn:user")

    //Se ambos foram capturados
    if(token && user) {
      //Ou seja execute novamente a autorização do token no cabeçalho
      //api.defaults.headers.authorization = `Bearer ${token}`
      api.defaults.headers.common['authorization'] = `Bearer ${token}`      

      //E atualize o estado de usuário toda vez que a página seja atualizada
      setData({
        token,
        user: JSON.parse(user) //Aqui converti para o formato original JSON a valor de usuário que foi passado como string para o localStorage
      })
      //Resolvendo assim o problema de logoff que estava acontecendo ao recarregar a página - Assim sendo vamos precisar de uma função de logoff que irá excluir os dados armazenados no localStorage - que só serão armazenados novamente ao fazer uma nova autenticação
    }

  }, [])


  //Ou seja além da função de login - também quero partilhar na minha aplicação o dado do usuário - autenticado / O token não precisa pois ele já está sendo inserido dentro do meu cabeçalho de autenticação
  //Desta forma o usuário será utilizado em todas as páginas da aplicação após ser autenticado(fizer login)
  //Tenho que compartilhar também o signOut
  return(
    <AuthContext.Provider value={{ 
      signIn,
      signOut,
      updateProfile,
      user: data.user 
    }}>  
    {children}
    </AuthContext.Provider>
  )
}

//Children é como se fosse as rotas da minha aplicação da forma como estava sendo utilizado lá no main
//No final das constas Toda a lógica está sendo feita separadamente aqui e sendo utilizada lá no meu main

//Função para ter separadamente - o funcionamento do meu useAuth - Utilizando do conceito de HOOK
function useAuth(){
  //Posso ter vários contexto então neste caso tenho que especificar qual é o contexto que quero utilizar
  const context = useContext(AuthContext)

  return context
}

//Exportando
export { AuthProvider, useAuth }