import styled from 'styled-components'
import backgroundImg from '../../assets/imgSigIn.jpg'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch; //Esticar - estender
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 0 200px;

  > h1 {
    font-size: 52px;
    color: ${({theme}) => theme.COLORS.LIGHT}
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;

  }

  > p {
    font-size: 18px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > a {
    margin-top: 30px;
    color: ${({theme}) => theme.COLORS.WHITE};

    font-size: 14px;
  }

`

export const Background = styled.div`

  flex: 1; //Ocupar todo o espaço disponivel para ela
  background: url(${backgroundImg}) no-repeat center center; //Não repetir a imagem
  background-size: cover; //Para que a imagem fique bem preenchida



`

