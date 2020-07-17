import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import Input from "../../components/Input";
import Select from "../../components/Select";

import api from "../../services/api";
import { useAuth } from "../../hooks/AuthContext";

import chipCard from "../../assets/chip-icon.svg";
import flag from "../../assets/flag-mastercard-icon.svg";
import saveBtn from "../../assets/save-btn.svg";
import cancelBtn from "../../assets/cancel-btn.svg";

import { Container, Content } from "./styles";
import { backgrounds } from "polished";

function CardNew() {
  const { user } = useAuth();
  const history = useHistory();

  const [name, setName] = useState("Nome do cartão");
  const [finalCard, setFinalCard] = useState("0000");
  const [expirationCard, setExpirationCard] = useState("");
  const [payDay, setPayDay] = useState();

  const options = [
    { value: 1, label: " 1" },
    { value: 2, label: " 2" },
    { value: 3, label: " 3" },
    { value: 4, label: " 4" },
    { value: 5, label: " 5" },
    { value: 6, label: " 6" },
    { value: 7, label: " 7" },
    { value: 8, label: " 8" },
    { value: 9, label: " 9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
    { value: 13, label: "13" },
    { value: 14, label: "14" },
    { value: 15, label: "15" },
    { value: 16, label: "16" },
    { value: 17, label: "17" },
    { value: 18, label: "18" },
    { value: 19, label: "19" },
    { value: 20, label: "20" },
    { value: 21, label: "21" },
    { value: 22, label: "22" },
    { value: 23, label: "23" },
    { value: 24, label: "24" },
    { value: 25, label: "25" },
    { value: 26, label: "26" },
    { value: 27, label: "27" },
    { value: 28, label: "28" },
    { value: 29, label: "29" },
    { value: 30, label: "30" },
    { value: 31, label: "31" },
  ];

  async function handleSubmit(data) {
    // e.preventDefault();
    try {
      await api.post("/cards", data);

      history.push("/cards");
    } catch (error) {
      console.log(error.response);
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
                  <Select
                    name="pay_day"
                    placeholder="ex: 25"
                    onChange={(e) => setPayDay(e.value)}
                    options={options}
                  />
                </div>

                <div className="block2-2">
                  <label htmlFor="best_day">melhor dia comprar</label>
                  <Select
                    name="best_day"
                    placeholder="ex: 15"
                    options={options}
                  />
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
