import React from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";

function Dashboard() {
  return (
    <Container>
      <Link to="/cards">Cartões</Link>
    </Container>
  );
}

export default Dashboard;
