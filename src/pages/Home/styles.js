import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px auto 64px 64px;
  grid-template-areas:
    'brand header'
    'sale content'
    'newtransfer content'
    'newnote content';

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
  margin: 10px 0;

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    color: ${({theme}) => theme.COLORS.GREEN};
    border-top: 2px solid ${({theme}) => theme.COLORS.GREEN};
    border-radius: 0 20px 20px 0;
    padding: 10px;

    p {
      font-size: 25px;
      font-weight: 500;
    }

    span {
      font-size: 30px;
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
export const NewTransfer = styled(Link)`
  grid-area: newtransfer;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  color: ${({ theme }) => theme.COLORS.GREEN};
  font-weight: 500;

  border-top: 2px solid ${({ theme }) => theme.COLORS.GREEN};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GREEN};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0 10px 10px 0;

  svg {
    margin-right: 8px;
  }
`

//(Link) da importação do componente link do react-router-dom
export const NewNote = styled(Link)`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  color: ${({ theme }) => theme.COLORS.GREEN};
  font-weight: 500;

  border-top: 1px solid ${({ theme }) => theme.COLORS.GREEN};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0 10px 10px 0;

  svg {
    margin-right: 8px;
  }
`
