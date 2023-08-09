import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  color: ${({theme}) => theme.COLORS.GREEN};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 700;

  /*Basicamente é isto: button:disable*/
  /*& está se referindo a este próprio button*/ 
  &:disabled {
    opacity: 0.5;
  }
  
`