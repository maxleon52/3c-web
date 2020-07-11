import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  /* border: 2px solid red; */
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 60px;
  width: 950px;
  max-width: 950px;
  margin-top: 50px;

  a {
    font-size: 24px;
    color: #546e7a;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    align-self: center;
    justify-self: center;
    background: #cddc39;
    width: 250px;
    height: 215px;
    padding: 16px 0;
    border-radius: 4px;

    :hover {
      border: 2px solid #546e7a;
      cursor: pointer;
      padding: 0;
    }
  }
`;
