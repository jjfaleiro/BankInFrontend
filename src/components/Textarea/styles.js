import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  font-weight: 500;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  color: ${({ theme }) => theme.COLORS.GREEN};

  border: none;
  resize: none; //Textarea tem está funcionalidade de segurando e arrastando consiga aumentar o tamanho da caixinha - estou removendo isto

  margin-bottom: 8px;
  border-radius: 10px;

  padding: 16px;

  //Placeholder de dentro do proprio text area
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GREEN};
  }

  
`
