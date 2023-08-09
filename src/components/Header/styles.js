import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header; //Aqui é para manter o header fixo ao rolar para cima e para baixo - enquanto o restante da página se move

  height: 105px;
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.WHITE};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

  /* background-color: red; */
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  /*Para estilizar a imagem dentro da minha div profile */
  > img {
    width: 60px;
    height: 60px;
    border: 2px solid ${({theme}) => theme.COLORS.GREEN_LIGHT};
    border-radius: 50%;
  }

  /*Para estilizar a div dentro dda minha div profile */
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px; //Altura da linha desta forma conseguimos afastar um pouco os elemento de strong e span um do outro

    //Cuidado ao fazer muitas (até 3) cascata/hierarquia/níveis neste caso eu não preciso do sinal de maior > pois já estou sendo bem especifico - já estou dentro da div que está dentro da div profile
    span {
      font-size: 12px;
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.GREEN};

    }

    strong {
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.GREEN};
    }
  }

`

export const Logout = styled.button`
  border: none;
  background: none;

  //Para estilizar o svg que é o próprio ícone
  > svg {
    color: ${({theme}) => theme.COLORS.GREEN};
    font-size: 32px; //Por ser um ícone ele funciona como se fosse um caractere
  }

`