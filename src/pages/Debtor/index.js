import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import Input from "../../components/Input";
import { toast } from "react-toastify";
import { FiArrowLeft } from "react-icons/fi";
import { FaTrash, FaUserEdit } from "react-icons/fa";

import api from "../../services/api";
import { useAuth } from "../../hooks/AuthContext";

import searchBtn from "../../assets/search-btn.svg";
import plusBtn from "../../assets/plus-btn.svg";
import debtorIconListDebtor from "../../assets/debtor-icon-list-debtor.svg";

import { Container, Content, ListDebtors } from "./styles";

function Debtor() {
  const [listDebtors, setListDebtors] = useState([]);
  const [onDelete, setOnDelete] = useState(false);
  const [onLoad, setOnLoad] = useState(false);

  const { user } = useAuth();
  const history = useHistory();

  // LISTAGEM DOS DEVEDORES
  useEffect(() => {
    async function loadDebtors() {
      setOnLoad(true);
      const response = await api.get("/debtors", {
        user_id: user._id,
      });
      setListDebtors(response.data);
      setOnDelete(false);
      setOnLoad(false);
    }

    loadDebtors();
  }, [user._id, onDelete]);

  async function handleDeleteDebtor(_id) {
    try {
      await api.delete(`/debtors/${_id}`);
      setOnDelete(true);
      toast.success("Devedor deletado com sucesso!");
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSearch(data) {
    const { search } = data;

    try {
      setOnLoad(true);
      const response = await api.get("/debtors-search", {
        params: { final_card: search },
      });
      setOnLoad(false);

      if (response.data <= 0 || response.data.message) {
        toast.info(response.data.message);
        setListDebtors(0);
        return;
      }

      setListDebtors([response.data]);
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
          <h1>Devedores</h1>
        </div>
        <header>
          <Form onSubmit={handleSearch}>
            <Input name="search" type="text" placeholder="Nome do devedor" />
            <button type="submit">
              <img src={searchBtn} alt="Pesquisar" /> Pesquisar
            </button>
          </Form>

          <Link to="/debtor/new">
            <button>
              <img src={plusBtn} alt="Novo" /> Novo
            </button>
          </Link>
        </header>

        {onLoad === true ? (
          <h1>Carregando...</h1>
        ) : (
          <>
            {listDebtors.length > 0 ? (
              <ul>
                {listDebtors.map((debtor) => (
                  <li key={debtor._id}>
                    <ListDebtors>
                      <div className="list-debtor-content1">
                        <div className="debtor-icons">
                          <Link to={`/debtor/edit/${debtor._id}`}>
                            <FaUserEdit size={25} />
                          </Link>
                          <button
                            onClick={() => handleDeleteDebtor(debtor._id)}
                          >
                            <FaTrash size={25} />
                          </button>
                        </div>
                        <img src={debtorIconListDebtor} alt="devedor-icone" />
                        <div className="debtor-data">
                          <span>{debtor.name}</span>
                        </div>
                      </div>
                    </ListDebtors>
                  </li>
                ))}
              </ul>
            ) : (
              <h1>Nenhum devedor encontrado</h1>
            )}
          </>
        )}
      </Content>
    </Container>
  );
}

export default Debtor;
