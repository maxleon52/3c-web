import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #546e7a;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 1150px;
  max-width: 1150px;

  div > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    width: 60px;
    height: 50px;
    background: transparent;

    :hover {
      background: ${lighten(0.1, "#546E7A")};
      /* transition: 0.8; */
    }
  }

  img {
    height: 45px;
  }
`;
