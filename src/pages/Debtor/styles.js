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

  ul {
    display: flex;

    li + li {
      margin-left: 20px;
    }
  }
`;

export const ListDebtors = styled.div`
  margin-top: 50px;
  padding: 10px 0;
  /* background: #cddc39; */
  border-radius: 4px;
  width: 180px;
  height: 180px;

  :hover {
    border: 2px solid #65727f;
    cursor: pointer;
  }

  .list-debtor-content1 {
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    height: 100%;

    svg {
      position: relative;
      align-self: flex-end;
      margin-right: 10px;
      border-radius: 4px;

      :hover {
        cursor: pointer;
        color: red;
        /* background-color: ${darken(0.1, "#fff")}; */
      }
    }

    img {
      height: 120px;
    }

    .debtor-data {
      /* border: 2px solid red; */
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 100%;
    }
  }
`;
