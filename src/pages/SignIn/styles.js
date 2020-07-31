import styled, { keyframes } from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  /* border: 2px solid red; */
  flex: 1;
  background-color: #546e7a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    /* border: 2px solid yellow; */
    width: 100%;
    height: 400px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 800px;
  background-color: #cddc39;
  /* border: 2px solid green; */
`;

const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationConteiner = styled.div`
  div {
    animation: ${appearFromRight} 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 413px;
    height: ${(props) => (props.err === "" ? "451px" : "499px")};
    background-color: #546e7a;
    border-radius: 8px;

    img {
      margin-top: 26px;
    }

    h1 {
      color: #fff;
      font-size: 23px;
      margin-top: 18px;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin-top: 26px;

      input {
        border: none;
        border-radius: 4px;
        padding: 14px;
        width: 100%;

        & + input {
          margin-top: 12px;
        }
      }

      button {
        font-weight: 700;
        border-radius: 4px;
        padding: 14px;
        width: 100%;
        margin-top: 12px;
        background: #cddc39;
        color: #546e7a;
        transition: background 0.2s;

        :hover {
          background: ${shade(0.2, "#cddc39")};
        }
      }
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 12px;
      color: #fff;
      transition: color 0.2s;

      :hover {
        color: ${shade(0.2, "#fff")};
      }

      svg {
        margin-right: 6px;
      }
    }
  }
`;
