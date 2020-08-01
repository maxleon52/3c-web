import styled from "styled-components";
import { lighten, darken } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`;

export const Content = styled.div`
  /* border: 2px solid red; */
  width: 950px;
  max-width: 950px;

  .pre-header {
    display: flex;
    align-items: center;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      width: 35px;
      border-radius: 4px;

      :hover {
        cursor: pointer;
        background-color: ${darken(0.1, "#fff")};
      }
    }

    h1 {
      margin-left: 10px;
    }
  }

  main {
    display: flex;
    margin-top: 30px;

    .debtor-form {
      width: 320px;
      height: 200px;
      background: #cddc39;
      padding: 10px 16px;
      border: 3px solid #546e7a;
      border-radius: 10px;
      margin-left: 30px;
      margin-top: 30px;

      form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .block0 {
          display: flex;
          flex-direction: column;
        }

        input {
          background: #546e7a;
          height: 30px;
          padding: 0 0 0 10px;
          border: 2px solid #fff;
          color: #fff;

          ::placeholder {
            color: #fff;
          }
        }

        .block4 {
          display: flex;
          justify-content: space-between;

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #546e7a;
            border: 2px solid #fff;
            height: 35px;
            width: 130px;
            color: #fff;
            transition: background 0.2s;

            :hover {
              background: ${darken(0.1, "#546e7a")};
            }

            img {
              height: 20px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
`;

export const ListDebtors = styled.div`
  display: flex;
  border-radius: 4px;

  .list-debtor-content1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;

    img {
      height: 250px;
    }

    .debtor-data {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 10px;
    }
  }
`;
