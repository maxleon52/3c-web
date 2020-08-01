import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Form } from "@unform/web";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Input from "../../components/Input";
import Select from "../../components/Select";

import api from "../../services/api";
import { useAuth } from "../../hooks/AuthContext";

import saveBtn from "../../assets/save-btn.svg";
import cancelBtn from "../../assets/cancel-btn.svg";
import debtorIconListDebtor from "../../assets/debtor-icon-list-debtor.svg";

import { Container, Content, ListDebtors } from "./styles";

function DebtorNew() {
  const { user } = useAuth();
  const history = useHistory();

  const [err, setErr] = useState("");
  const formRef = useRef(null);

  const [name, setName] = useState("Nome do cartão");

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Preenchimento obrigatório"),
        final_card: Yup.string()
          .transform((value) => (isNaN(value) ? undefined : value))
          .length(4, "Digite os 4 números finais")
          .required("Preenchimento obrigatório"),
        expiration_card: Yup.date()
          .transform((value) => (isNaN(value) ? undefined : value))
          .required("Preenchimento obrigatório"),
        pay_day: Yup.number()
          .transform((value) => (isNaN(value) ? undefined : value))
          .required("Preenchimento obrigatório"),
        best_day: Yup.number()
          .transform((value) => (isNaN(value) ? undefined : value))
          .required("Preenchimento obrigatório"),
        flag: Yup.string().required("Preenchimento obrigatório"),
        color: Yup.string().required("Preenchimento obrigatório"),
      });
      await schema.validate(data, { abortEarly: false });

      await api.post("/cards", data);

      formRef.current.setErrors({});
      setErr("");
      reset();
      toast.success("Cartão cadastrado com sucesso!");
      history.push("/cards");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
        setErr(errorMessages);

        return;
      }
      toast.error(err.response.data.message);
    }
  }

  // Voltar tela anterior
  function handleListDebtor() {
    try {
      history.push("/debtors");
    } catch (error) {
      toast.error("Ocorreu um erro inesperado, contate o suporte.");
    }
  }

  return (
    <Container>
      <Content>
        <div className="pre-header">
          <button onClick={handleListDebtor}>
            <FiArrowLeft size={30} />
          </button>
          <h1>Novo devedor</h1>
        </div>

        <main>
          <ListDebtors>
            <div className="list-debtor-content1">
              <img src={debtorIconListDebtor} alt="devedor-icone" />
              <div className="debtor-data">
                <span>Fulano de tal</span>
              </div>
            </div>
          </ListDebtors>

          <div className="debtor-form">
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="block0">
                <label htmlFor="name">Nome do cartão</label>
                <Input
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ex: Fulano de tal"
                ></Input>
              </div>

              <div className="block4">
                <button type="submit">
                  <img src={saveBtn} alt="Salvar" /> Salvar
                </button>
                <button type="cancel" onClick={handleListDebtor}>
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

export default DebtorNew;
