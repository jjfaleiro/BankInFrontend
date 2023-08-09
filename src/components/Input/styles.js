import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
  color: ${({theme}) => theme.COLORS.GREEN};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({theme}) => theme.COLORS.GREEN};
    background: transparent;
    border: 0;
    font-weight: 500;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GREEN};
    }
    
  }
  

  > svg {
      margin-left: 16px;
  }

`
