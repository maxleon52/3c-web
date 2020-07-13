import React, { useState, useEffect } from "react";
import { Form } from "@unform/web";
import Input from "../../components/Input";

import api from "../../services/api";
import { useAuth } from "../../hooks/AuthContext";

import searchBtn from "../../assets/search-btn.svg";
import plusBtn from "../../assets/plus-btn.svg";
import cardIconListCard from "../../assets/card-icon-list-card.svg";
import editCardBtn from "../../assets/edit-card-btn.svg";
import deleteCardBtn from "../../assets/delete-card-btn.svg";

import { Container, Content, ListCards } from "./styles";

function Card() {
  const [listCards, setListCard] = useState([]);

  const { user } = useAuth();

  // LISTAGEM NÃO ESTA FUNCIONANDO, LOOP INFINIT
  useEffect(() => {
    async function loadCards() {
      const response = await api.get("/cards", {
        user_id: user._id,
      });
      setListCard(response.data);
    }

    loadCards();
  }, [user._id]);

  return (
    <Container>
      <Content>
        <h1>Meus Cartões</h1>
        <header>
          <Form>
            <Input name="search" type="text" placeholder="Dados do cartão" />
            <button>
              <img src={searchBtn} alt="Pesquisar" /> Pesquisar
            </button>
          </Form>
          <button>
            <img src={plusBtn} alt="Novo" /> Novo
          </button>
        </header>

        <ul>
          {listCards.map((card) => (
            <li key={card._id}>
              <ListCards>
                <div className="list-card-content1">
                  <img src={cardIconListCard} alt="cartão-icone" />
                  <div className="card-data">
                    <span>{card.name}</span>
                    <span>Final - {card.final_card}</span>
                    <span>{card.flag}</span>
                  </div>
                </div>

                <div className="list-card-content2">
                  <button>
                    <img src={editCardBtn} alt="Editar" /> Editar
                  </button>
                  <button>
                    <img src={deleteCardBtn} alt="Deletar" /> Deletar
                  </button>
                </div>
              </ListCards>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
}

export default Card;
