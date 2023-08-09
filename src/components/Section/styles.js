import styled from "styled-components"

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};

    padding-bottom: 16px;
    margin-bottom: 28px;

    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 20px;
    font-weight: 700;
  }
`;