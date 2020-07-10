import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";

import { Container, Content } from "./styles";

import btnCardHome from "../../assets/btn-card-home.svg";
import btnExit from "../../assets/btn-exit.svg";

function Header() {
  const { signOut } = useAuth();
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={btnCardHome} alt="home" />
        </Link>

        <div>
          <span>3C - Controle Cartão de Crédito</span>
          <span>Olá, Fulano</span>
        </div>

        <button onClick={signOut}>
          <img src={btnExit} alt="sair" />
        </button>
      </Content>
    </Container>
  );
}

export default Header;
