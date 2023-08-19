import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px auto 80px;
  grid-template-areas:
    'brand header'
    'sale content'
    'new content';

  background-color: ${({ theme }) => theme.COLORS.GREEN};
`

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  > h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.GREEN};
  }
`

export const Sale = styled.div`
  grid-area: sale;
  /* margin: 10px 0; */

  > div {
    /* height: 100%; */
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    /* gap: 10px; */
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
    color: ${({theme}) => theme.COLORS.GREEN};
    border-top: 2px solid ${({theme}) => theme.COLORS.GREEN};
    border-radius: 0 0 20px 20px;
    padding: 10px;

    p {
      font-size: 16px;
      font-weight: 700;
    }

    span {
      font-size: 20px;
      font-weight: 700;
    }
  }

`

export const Content = styled.div`
  grid-area: content;

  padding: 0 64px;

  overflow-y: auto; //Substitui o scroll que só aparece quando precisa
`
//(Link) da importação do componente link do react-router-dom
// export const NewTransfer = styled(Link)`
//   grid-area: newnote;

//   background-color: ${({ theme }) => theme.COLORS.WHITE};

//   color: ${({ theme }) => theme.COLORS.GREEN};
//   font-size: 20px;
//   font-weight: 500;

//   border-top: 2px solid ${({ theme }) => theme.COLORS.GREEN};
//   border-bottom: 1px solid ${({ theme }) => theme.COLORS.GREEN};

  
//   width: fit-content;
//   padding: 18px;

//   border-radius: 50%;


//   svg {
//     margin-right: 8px;
//   }
// `

export const New = styled.div`
  grid-area: new;

  display: flex;
  justify-content: space-evenly;
  height: fit-content;
  gap: 5px;

  padding-bottom: 8px;

  
`

//(Link) da importação do componente link do react-router-dom
export const NewNote = styled(Link)`

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  color: ${({ theme }) => theme.COLORS.GREEN};
  font-size: 20px;
  font-weight: 500;
/* 
  border: 2px solid ${({ theme }) => theme.COLORS.GREEN_LIGHT}; */

  /* display: flex;
  align-items: center;
  justify-content: center; */

  width: fit-content;
  padding: 12px;
  border-radius: 20%;
  width: 46%;

  > p {
    margin-top: 2px;
    font-size: 12px;
  }


  svg {
    margin: 8px 0 -2px 0;
  }
`
