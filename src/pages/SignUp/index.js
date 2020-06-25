import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Container, Background, Content } from "./styles";

import bgLogin from "../../assets/background-signup.png";
import handCard from "../../assets/hand-card.svg";

function SignUp() {
  return (
    <Container>
      <Content>
        <div>
          <img src={handCard} alt="" />
          <h1>Controle Cartão de Crédito</h1>

          <form>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />

            <button type="submit">Criar conta</button>
          </form>

          <a href="#">
            <FiArrowLeft /> Já tenho conta
          </a>
        </div>
      </Content>
      <Background>
        <img src={bgLogin} alt="imagem login" />
      </Background>
    </Container>
  );
}

export default SignUp;
