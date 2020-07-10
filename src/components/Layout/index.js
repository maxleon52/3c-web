import React from "react";

import Header from "../../components/Header";
import Routes from "../../routes";

import { useAuth } from "../../hooks/AuthContext";

import { Container } from "./styles";

function Layout() {
  const { user } = useAuth();
  return (
    <Container>
      {user ? <Header /> : null}

      <main>
        <Routes />
      </main>
    </Container>
  );
}

export default Layout;
