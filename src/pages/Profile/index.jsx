//Importando o useState para capturar dados necessário para a página do perfil do usuário
import { useEffect, useState} from "react";

//Conversor de html em elementos de REACT
// import parse from "html-react-parser"

//Agora para capturar dados cadastrados do meu usuário autenticado
import { useAuth } from "../../hooks/auth";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";

import { Link } from "react-router-dom"

import { Input } from "../../components/Input";

import { Button } from "../../components/Button";

import { Section } from "../../components/Section";

import { Container, Form, Avatar } from "./styles";

import { api } from "../../services/api"

//Imagem de usuário nulo - Para quando o usuário não tiver uma foto
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { useNavigate } from "react-router-dom";


export function Profile() {
  // const containerRef = useRef()

  //Para acessar os dados do meu usuário cadastrado
  const { user, updateProfile } = useAuth()

  //Estados da minha página de perfil
  const [name, setName] = useState(user.name)
  const [balance, setBalance] = useState(user.balance)
  const [account, setAccount] = useState(user.account)
  const [accountType, setAccountType] = useState(user.accountType)
  const [cpf, setCPF] = useState(user.cpf)
  const [email, setEmail] = useState(user.email)
  //Senha fica vazia por questão de segurança - não fica visível
  const [passwordOld, setPasswordOld] = useState("")
  const [passwordNew, setPasswordNew] = useState("")
  const [passwordNewCheck, setPasswordNewCheck] = useState("")
  const [isChecked, setIsChecked] = useState(false)

  //Verificar se usuário tem avatar
  //Caso sim pegar o endereço desta imagem
  //Caso não imprimir imagem padrão de usuário
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  //Avatar - Começa como nulo - ou seja sem avatar
  //Este exibe o avatar de fato
  const [avatar, setAvatar] = useState(avatarUrl)
  //Este armazena o arquivo selecionado
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()
  
  //Criando uma função para lidar com o updateProfile
  async function handleUpdate(){
    //Armazenando as variáveis que serão utilizadas pela função
    const user = {
      name,
      cpf,
      email,
      password: passwordNew,
      passwordCheck: passwordNewCheck,
      old_password: passwordOld
    }
    //Que irá instanciar o updateProfile com as informações atualizadas
    //Estou passando o avatarFile - para armazenar o endereço do arquivo no BD

    // const avatarExist = avatarFile ? avatarFile : avatar

    //Para resolver o problema da foto de perfil que ao atualizar estava ficando em branco entre outros dados
    //É o seguinte eu pego o user que contem todas informações que no caso está fora desta função e junto com as informações que estão sendo passadas aqui dentro em segundo lugar pois a informações que estão sendo atualizadas iram sobrescrever as informações antigas, e caso eu não venha alterar algum dado como a foto o userGlobal estará puxando a informação do BD  sendo assim todas as informações serão atualizadas no localStorage portanto nada ficará nulo
    // const userUpdate = Object.assign(userGlobal, userLocal);
    // console.log(userUpdate)

    //await updateProfile({user: userUpdate, avatarFile})
    await updateProfile({user, avatarFile})

  }

  //Função para lidar com mudança de avatar - que irá receber o evento de forma automática do onChange
  function handleChangeAvatar(event){
    //Ou seja armazene a captura do evento na posição um do arquivo (pois você pode pegar vários arquivos mas só pode colocar uma foto de perfil)
    const file = event.target.files[0]
    //Vou armazenar o arquivo aqui
    setAvatarFile(file)

    //Criando a rota para ficar armazenada no BD
    const imagePreview = URL.createObjectURL(file)

    //Aqui vou imprimir a imagem na aplicação
    setAvatar(imagePreview)

  }

  async function handleBack() {
    navigate(-1)
  }

  const handleOnChange = () => {
    setIsChecked(!isChecked)
    console.log(isChecked)
  }

  // const trabalhoFDP = e => {
  //   setPasswordNew(e.target.value)
  //   console.log(e)
  // }

  // useEffect(() => {
  //     if(isChecked === true) {
  //       const test = '<Input placeholder="Nova senha" type="password" icon={FiLock} onChange={trabalhoFDP(e)}/>'
  //       console.log(test, containerRef.current)
  //       containerRef.innerHTML = parse(test)     
  //     } else {
  //       containerRef.innerHTML = ``
  //     }
  // }, [isChecked])

  //onChange={e => setPasswordNew(e.target.value)}

  return (
    <Container>
      <header>
        <Link
          onClick={handleBack}  
        >
          <FiArrowLeft/>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
          src={avatar} 
          alt="Foto do usuário" 
          />
          <label htmlFor="avatar">
            <FiCamera/>
            <input id="avatar" type="file" onChange={handleChangeAvatar}/>
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          defaultValue={name}
        />
        <div id="blockInput">
          <div className="input">
            <label>Saldo</label>
            <Input
              type="text"
              className="newDataInfo"
              defaultValue={`R$ ${balance}`}
            />
          </div>
          <div className="input">
            <label>Nº da conta</label>
            <Input
              type="text"
              className="newDataInfo"
              defaultValue={account}
            />
          </div>
          <div className="input">
            <label>Tipo</label>
            <Input
              type="text"
              className="newDataInfo"
              value={accountType}
              onChange={e => setAccountType(e.target.value)}
            />
          </div>
          
        </div>
        <Input
          placeholder="CPF"
          type="text"
          icon={FiUser} 
          value={cpf}
          onChange={e => setCPF(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail} 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock} 
          onChange={e => setPasswordOld(e.target.value)}
        />
        <div className="updatePassword">
          <div className="box">
            <label>Deseja trocar senha?</label>
            <input type="checkbox" id="checkbox" checked={isChecked} onChange={handleOnChange}
            />
          </div>
          <div id="changePassword">
            {isChecked === true ? <Input placeholder="Nova senha" type="password" icon={FiLock} onChange={e => setPasswordNew(e.target.value)}/> : null}
            {isChecked === true ? <Input placeholder="Confirmar senha" type="password" icon={FiLock} onChange={e => setPasswordNewCheck(e.target.value)}/> : null}
          </div>
          
        </div>
        
        <Button title="Salvar" onClick={handleUpdate} to="/profile"/>
      </Form>
    </Container>
  )
}

/*
{
            if(checked.checked) {
              return(<Section title="Trocar senha">
              <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordNew(e.target.value)}
              />
            </Section>)
            }
            
            
          }
*/