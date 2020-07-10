import React from "react";

import Header from "../../components/Header";
import Routes from "../../routes";

import { Container } from "./styles";

function Layout() {
  return (
    <Container>
      <Header />

      <main>
        <Routes />
      </main>
    </Container>
  );
}

export default Layout;
