import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Container, Background, Content } from "./styles";

import bgLogin from "../../assets/background-login.png";
import handCard from "../../assets/hand-card.svg";

function SignIn() {
  return (
    <Container>
      <Background>
        <img src={bgLogin} alt="imagem login" />
      </Background>

      <Content>
        <div>
          <img src={handCard} alt="" />
          <h1>Controle Cartão de Crédito</h1>

          <form>
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />

            <button type="submit">Entrar</button>
          </form>

          <a href="#">Esqueci minha senha</a>

          <a href="#">
            <FiLogIn /> Criar conta
          </a>
        </div>
      </Content>
    </Container>
  );
}

export default SignIn;
