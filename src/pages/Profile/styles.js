import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
      color: ${({ theme }) => theme.COLORS.GREEN};
      font-size: 24px;
      transition: 0.2s ease-in-out;
    }

    svg:hover {
      background-color: ${({ theme }) => theme.COLORS.GREEN};
      color: ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 50%;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;

  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 20px; //Pegue o 4º filho
  }

  > #blockInput {
    display: flex;
    gap: 20px;
    margin-top: 16px;

    .input {
      display: flex;
      flex-direction: column;

      label {
        font-size: 10px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 2px;
      }

      .newDataInfo {
        height: 14px;
        text-align: center;
        font-size: 16px;
        background-color: ${({ theme }) => theme.COLORS.GREEN};
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }

  > .updatePassword {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    .box {
      display: flex;
      justify-content: space-between;
      padding: 0 10px 0 0;

    }
    
    #checkbox {
      appearance: none;
      background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
      border: 1px solid  ${({ theme }) => theme.COLORS.WHITE};
      padding: 10px;
      border-radius: 50%;
    }

    #checkbox:checked {
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.RED};
    }
    
    #changePassword {

      margin-top: 14px;

      input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({theme}) => theme.COLORS.GREEN};
        background: ${({theme}) => theme.COLORS.GREEN_LIGHT};
        border: 0;
        border-radius: 10px;
        font-weight: 500;

        &::placeholder {
          color: ${({theme}) => theme.COLORS.GREEN};
        }
      }
    }

  }

  > button {
    margin-bottom: 50px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -125px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border: 2px solid ${({ theme }) => theme.COLORS.GREEN};
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    border: 2px solid ${({ theme }) => theme.COLORS.GREEN};

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.GREEN};
    }
  }
`
