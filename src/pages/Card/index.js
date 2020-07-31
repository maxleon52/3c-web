import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import Input from "../../components/Input";
import { toast } from "react-toastify";
import { FiArrowLeft } from "react-icons/fi";

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
  const [onDelete, setOnDelete] = useState(false);
  const [onLoad, setOnLoad] = useState(false);

  const { user } = useAuth();
  const history = useHistory();

  // LISTAGEM DOS CARTÕES
  useEffect(() => {
    async function loadCards() {
      setOnLoad(true);
      const response = await api.get("/cards", {
        user_id: user._id,
      });
      setListCard(response.data);
      setOnDelete(false);
      setOnLoad(false);
    }

    loadCards();
  }, [user._id, onDelete]);

  async function handleDeleteCard(_id) {
    try {
      await api.delete(`/cards/${_id}`);
      setOnDelete(true);
      toast.success("Cartão deletado com sucesso!");
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSearch(data) {
    const { search } = data;

    try {
      setOnLoad(true);
      const response = await api.get("/cards-search", {
        params: { final_card: search },
      });
      setOnLoad(false);

      if (response.data <= 0 || response.data.message) {
        toast.info(response.data.message);
        setListCard(0);
        return;
      }

      setListCard([response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  // Voltar tela anterior
  function handleDashboard() {
    try {
      history.push("/");
    } catch (error) {
      toast.error("Ocorreu um erro inesperado, contate o suporte.");
    }
  }

  return (
    <Container>
      <Content>
        <div className="pre-header">
          <button onClick={handleDashboard}>
            <FiArrowLeft size={30} />
          </button>
          <h1>Meus Cartões</h1>
        </div>
        <header>
          <Form onSubmit={handleSearch}>
            <Input
              name="search"
              type="text"
              placeholder="Números do final do cartão"
            />
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

        {onLoad === true ? (
          <h1>Carregando...</h1>
        ) : (
          <>
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
          </>
        )}
      </Content>
    </Container>
  );
}

export default Card;
