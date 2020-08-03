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
import shoppingIcon from "../../assets/shopping-icon.svg";
import editCardBtn from "../../assets/edit-card-btn.svg";
import deleteCardBtn from "../../assets/delete-card-btn.svg";

import { Container, Content, ListShopping } from "./styles";

function Shopping() {
  const [listShopping, setListShopping] = useState([]);
  const [onDelete, setOnDelete] = useState(false);
  const [onLoad, setOnLoad] = useState(false);

  const { user } = useAuth();
  const history = useHistory();

  // LISTAGEM DOS COMPRAS
  useEffect(() => {
    async function loadShopping() {
      setOnLoad(true);
      const response = await api.get("/shopping", {
        user_id: user._id,
      });
      console.log(response.data);
      setListShopping(response.data);
      setOnDelete(false);
      setOnLoad(false);
    }

    loadShopping();
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
        setListShopping(0);
        return;
      }

      setListShopping([response.data]);
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
          <h1>Minhas compras</h1>
        </div>
        <header>
          <Form onSubmit={handleSearch}>
            <Input name="search" type="text" placeholder="Nome da compra" />
            <button type="submit">
              <img src={searchBtn} alt="Pesquisar" /> Pesquisar
            </button>
          </Form>

          <Link to="/shopping/new">
            <button>
              <img src={plusBtn} alt="Novo" /> Novo
            </button>
          </Link>
        </header>

        {onLoad === true ? (
          <h1>Carregando...</h1>
        ) : (
          <>
            {listShopping.length > 0 ? (
              <ul>
                {listShopping.map((shopping) => (
                  <li key={shopping._id}>
                    <ListShopping>
                      <div className="list-shopping-content1">
                        <img src={shoppingIcon} alt="shopping-icon" />
                        <div className="shopping-data">
                          <span>{shopping.card_id.name}</span>
                          <span>Final - {shopping.card_id.final_card}</span>
                          <span>{shopping.debtor_id.name}</span>
                          <span>
                            R$ {shopping.value} - {shopping.qtd_portion}x
                          </span>
                        </div>
                      </div>

                      <div className="list-shopping-content2">
                        <Link to={`/shopping/edit/${shopping._id}`}>
                          <button>
                            <img src={editCardBtn} alt="Editar" /> Editar
                          </button>
                        </Link>
                        <button onClick={() => handleDeleteCard(shopping._id)}>
                          <img src={deleteCardBtn} alt="Deletar" /> Deletar
                        </button>
                      </div>
                    </ListShopping>
                  </li>
                ))}
              </ul>
            ) : (
              <h1>Nenhum compra cadastrada</h1>
            )}
          </>
        )}
      </Content>
    </Container>
  );
}

export default Shopping;
