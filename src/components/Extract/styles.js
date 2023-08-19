import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE};

  border: none;
  border-radius: 10px;

  padding: 10px 20px;
  margin-bottom: 14px;

  > header {
    display: flex;
    flex-direction: row-reverse;
    font-size: 14px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.GREEN};

  }

  > main {
    display: flex;
    align-items: center;
    gap: 50px;


    > div {
      display: flex;
      flex-direction: row;
      text-align: left;
      gap: 20px;

      font-weight: 700;
      font-size: 18px;

      color: ${({theme}) => theme.COLORS.GREEN};

      p:first-child {
        width: 150px;
      }

      p:nth-child(2) {
        width: 350px;
      }

      p:last-child {
        width: 190px;
        font-weight: 500;
      }

      #positive {
        color: ${({theme}) => theme.COLORS.GREEN};
      }

      #negative {
        color: ${({theme}) => theme.COLORS.RED};
      }


    }
  }

  > footer {
    display: flex;
    flex-direction: row-reverse;
    font-size: 14px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.GREEN};
  }
`