import React from "react";
import { Form } from "@unform/web";
import * as Yup from "yup";
import Input from "../../components/Input";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Background, Content } from "./styles";

import bgLogin from "../../assets/background-signup.png";
import handCard from "../../assets/hand-card.svg";

function SignUp() {
  async function handleSubimit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string().required("E-mail obrigatório").email(),
        password: Yup.string()
          .required("Senha obrigatória")
          .min(6, "No mínimo 6 dígitos"),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Content>
        <div>
          <img src={handCard} alt="" />
          <h1>Controle Cartão de Crédito</h1>

          <Form onSubmit={handleSubimit}>
            <Input name="name" type="text" placeholder="Nome" />
            <Input name="email" type="email" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Senha" />

            <button type="submit">Criar conta</button>
          </Form>

          <a href="#">
            <FiArrowLeft /> Já tenho conta
          </a>
        </div>
      </Content>
      <Background>
        <img src={bgLogin} alt="imagem login" />
      </Background>
    </Container>
  );
}

export default SignUp;
