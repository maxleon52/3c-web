import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import Input from "../../components/Input";

import api from "../../services/api";
import { useAuth } from "../../hooks/AuthContext";

import chipCard from "../../assets/chip-icon.svg";
import flag from "../../assets/flag-mastercard-icon.svg";
import saveBtn from "../../assets/save-btn.svg";
import cancelBtn from "../../assets/cancel-btn.svg";

import { Container, Content } from "./styles";

function CardNew() {
  const { user } = useAuth();
  const history = useHistory();

  const [name, setName] = useState("Nome do cartão");
  const [finalCard, setFinalCard] = useState("0000");
  const [expirationCard, setExpirationCard] = useState("");
  const [payDay, setPayDay] = useState("25");

  async function handleSubmit(data) {
    // e.preventDefault();
    try {
      await api.post("/cards", data);

      history.push("/cards");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Content>
        <h1>Novo cartão</h1>

        <main>
          <div className="card">
            <strong name="name">{name}</strong>

            <img name="chipCard" src={chipCard} alt="chip-icone" />

            <div className="block1">
              <span>final do cartão</span>
              <strong>XXXX XXXX XXXX {finalCard}</strong>
            </div>

            <div className="block2">
              <div className="block2-1">
                <span>vencimento</span>
                <strong>
                  {expirationCard
                    ? expirationCard[1] + "/" + expirationCard[0]
                    : "99/9999"}
                </strong>
              </div>

              <div className="block2-2">
                <span>dia do pagamento</span>
                <strong>{payDay}</strong>
              </div>

              <img src={flag} alt="bandeira" />
            </div>
            <strong>{user.name.toUpperCase()}</strong>
          </div>

          <div className="card-form">
            <Form onSubmit={handleSubmit}>
              <div className="block0">
                <label htmlFor="name">Nome do cartão</label>
                <Input
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ex: Fulano de tal"
                ></Input>
              </div>

              <div className="block1">
                <div className="block1-1">
                  <label htmlFor="final_card">final do cartão</label>
                  <Input
                    name="final_card"
                    onChange={(e) => setFinalCard(e.target.value)}
                    placeholder="ex: 3232"
                  ></Input>
                </div>
                <div className="block1-2">
                  <label htmlFor="expiration_card">vencimento</label>
                  <Input
                    name="expiration_card"
                    type="date"
                    onChange={(e) =>
                      setExpirationCard(e.target.value.split("-"))
                    }
                    placeholder="ex: 05/2099"
                  ></Input>
                </div>
              </div>

              <div className="block2">
                <div className="block2-1">
                  <label htmlFor="pay_day">dia do pagamento</label>
                  <Input
                    name="pay_day"
                    onChange={(e) => setPayDay(e.target.value)}
                    placeholder="ex: 25"
                  ></Input>
                </div>

                <div className="block2-2">
                  <label htmlFor="best_day">melhor dia comprar</label>
                  <Input name="best_day" placeholder="ex: 15"></Input>
                </div>
              </div>

              <div className="block3">
                <div className="block3-1">
                  <label htmlFor="flag">Bandeira</label>
                  <Input name="flag" placeholder="ex: Mastercard"></Input>
                </div>
                <div className="block3-2">
                  <label htmlFor="color">cor</label>
                  <Input
                    name="color"
                    // type="tel"
                    // onChange={(e) => setColor(e.target.value)}
                    placeholder="ex: verde"
                  ></Input>
                </div>
              </div>

              <div className="block4">
                <button type="submit">
                  <img src={saveBtn} alt="Salvar" /> Salvar
                </button>
                <button type="cancel">
                  <img src={cancelBtn} alt="Cancelar" /> Cancelar
                </button>
              </div>
            </Form>
          </div>
        </main>
      </Content>
    </Container>
  );
}

export default CardNew;
