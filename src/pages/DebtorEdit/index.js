import React, { useState, useRef, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Form } from "@unform/web";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Input from "../../components/Input";

import api from "../../services/api";

import saveBtn from "../../assets/save-btn.svg";
import cancelBtn from "../../assets/cancel-btn.svg";
import debtorIconListDebtor from "../../assets/debtor-icon-list-debtor.svg";

import { Container, Content, ListDebtors } from "./styles";

function DebtorNew() {
  const history = useHistory();
  const { _id } = useParams();

  const [err, setErr] = useState("");
  const formRef = useRef(null);

  const [name, setName] = useState("Devedor");

  useEffect(() => {
    async function loadData() {
      const response = await api.put(`/debtors/${_id}`);
      const { name } = response.data;

      setName(name);
    }
    loadData();
  }, [_id]);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Preenchimento obrigatório"),
      });
      data = {
        name,
      };
      await schema.validate(data, { abortEarly: false });

      await api.put(`/debtors/${_id}`, data);

      formRef.current.setErrors({});
      setErr("");
      reset();
      toast.success("Devedor atualizado com sucesso!");
      history.push("/debtors");
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
                <span>{name}</span>
              </div>
            </div>
          </ListDebtors>

          <div className="debtor-form">
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="block0">
                <label htmlFor="name">Nome</label>
                <Input
                  name="name"
                  value={name}
                  maxlength="22"
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
