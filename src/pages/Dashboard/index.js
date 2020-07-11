import React from "react";
import { Link } from "react-router-dom";

import { Container, Content } from "./styles";
import cardMenu from "../../assets/card-menu.svg";
import debtorMenu from "../../assets/debtor-menu.svg";
import abstractMenu from "../../assets/abstract-menu.svg";
import shoppingMenu from "../../assets/shopping-menu.svg";

function Dashboard() {
  return (
    <Container>
      <Content>
        <Link to="/cards">
          <div>
            <img src={cardMenu} alt="icone-cartão-menu" />
            Cartões
          </div>
        </Link>
        <Link to="/debtors">
          <div>
            <img src={debtorMenu} alt="icone-devedor-menu" />
            Devedores
          </div>
        </Link>
        <Link to="/abstract">
          <div>
            <img src={abstractMenu} alt="icone-resumo-menu" />
            Resumo
          </div>
        </Link>
        <Link to="/shopping">
          <div>
            <img src={shoppingMenu} alt="icone-compras-menu" />
            Compras
          </div>
        </Link>
      </Content>
    </Container>
  );
}

export default Dashboard;
