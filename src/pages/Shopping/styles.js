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

  header {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    form {
      display: flex;
      width: 60%;

      > input {
        width: 100%;
        padding-left: 16px;
        background: #65727f;
        color: #fff;
        border: 2px solid #65727f;
        ::placeholder {
          color: #fff;
        }
      }
      > button {
        width: 190px;
        background: #cddc39;
        color: #65727f;
        border: 2px solid #65727f;
        border-radius: 0 4px 4px 0;
        :hover {
          background: ${darken(0.08, "#cddc39")};
        }

        img {
          margin-right: 5px;
        }
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #cddc39;
      color: #65727f;
      border: 2px solid #65727f;
      border-radius: 4px;
      width: 120px;
      height: 50px;

      :hover {
        background: ${darken(0.08, "#cddc39")};
      }

      img {
        height: 25px;
        margin-right: 5px;
      }
    }
  }
`;

export const ListShopping = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding: 10px 0;
  background: #cddc39;
  border: 2px solid #65727f;
  border-radius: 4px;

  .list-shopping-content1 {
    display: flex;
    align-items: center;
    width: 50%;
    margin-left: 40px;

    img {
      height: 90px;
    }

    .shopping-data {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 90px;
      width: 100%;
      margin-left: 50px;
    }
  }

  .list-shopping-content2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 35%;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #65727f;
      border: 2px solid #fff;
      border-radius: 4px;
      width: 120px;
      height: 50px;
      color: #fff;
      :hover {
        background: ${lighten(0.05, "#65727f")};
      }

      img {
        height: 25px;
        margin-right: 5px;
      }
    }
  }
`;
