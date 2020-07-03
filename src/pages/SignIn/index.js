import React, { useState, useRef } from "react";
import { Form } from "@unform/web";
import * as Yup from "yup";
import Input from "../../components/Input";
import { FiLogIn } from "react-icons/fi";
import { Container, Background, Content } from "./styles";

import bgLogin from "../../assets/background-login.png";
import handCard from "../../assets/hand-card.svg";

function SignIn() {
  const [err, setErr] = useState("");
  const formRef = useRef(null);

  async function handleSubimit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Favor inserir um e-mail válido."),
        password: Yup.string().required("Senha obrigatória"),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current.setErrors({});
      setErr("");
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
        setErr(errorMessages);
        // console.log(formRef);
      }
    }
  }

  return (
    <Container>
      <Background>
        <img src={bgLogin} alt="imagem login" />
      </Background>

      <Content err={err}>
        <div>
          <img src={handCard} alt="" />
          <h1>Controle Cartão de Crédito</h1>

          <Form ref={formRef} onSubmit={handleSubimit}>
            <Input name="email" type="text" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Senha" />

            <button type="submit">Entrar</button>
          </Form>

          <a href="#">Esqueci minha senha</a>

          <a href="#">
            <FiLogIn /> Criar conta
          </a>
        </div>
      </Content>
    </Container>
  );
}

export default SignIn;
