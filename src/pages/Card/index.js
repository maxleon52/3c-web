import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import Input from "../../components/Input";
import { toast } from "react-toastify";

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

  // LISTAGEM DOS CARTÕES
  useEffect(() => {
    async function loadCards() {
      const response = await api.get("/cards", {
        user_id: user._id,
      });
      setListCard(response.data);
    }

    loadCards();
  }, [user._id]);

  async function handleDeleteCard(_id) {
    try {
      await api.delete(`/cards/${_id}`);
      toast.success("Cartão deletado com sucesso!");
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSearch(data) {
    const { search } = data;
    try {
      const response = await api.get("/cards-search", {
        params: { final_card: search },
      });

      setListCard([response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Content>
        <h1>Meus Cartões</h1>
        <header>
          <Form onSubmit={handleSearch}>
            <Input name="search" type="text" placeholder="Dados do cartão" />
            <button type="submit">
              <img src={searchBtn} alt="Pesquisar" /> Pesquisar
            </button>
          </Form>

          <Link to="/cards/new">
            <button>
              <img src={plusBtn} alt="Novo" /> Novo
            </button>
          </Link>
        </header>

        {listCards.length > 0 ? (
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
                    <Link to={`/cards/edit/${card._id}`}>
                      <button>
                        <img src={editCardBtn} alt="Editar" /> Editar
                      </button>
                    </Link>
                    <button onClick={() => handleDeleteCard(card._id)}>
                      <img src={deleteCardBtn} alt="Deletar" /> Deletar
                    </button>
                  </div>
                </ListCards>
              </li>
            ))}
          </ul>
        ) : (
          <h1>Nenhum cartão cadastrado</h1>
        )}
      </Content>
    </Container>
  );
}

export default Card;
