import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { useAuth } from "../../hooks/AuthContext";

import Input from "../../components/Input";
import { FiLogIn } from "react-icons/fi";

import { Container, Background, Content, AnimationConteiner } from "./styles";

import bgLogin from "../../assets/background-login.png";
import handCard from "../../assets/hand-card.svg";

function SignIn() {
  const [err, setErr] = useState("");
  const formRef = useRef(null);

  const { user, signIn } = useAuth(); // Contexto de auth
  console.log(user);

  async function handleSubimit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Favor inserir um e-mail válido."),
        password: Yup.string().required("Senha obrigatória"),
      });

      await schema.validate(data, { abortEarly: false });

      // Faz a chamada a rota "/session" através do contextoAPI
      signIn({
        email: data.email,
        password: data.password,
      });

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
        toast.error("Falha na autenticação, verifique seus dados.");
        // console.log(formRef);
      } else {
        toast.info("Houve um erro inesperado, contate o suporte.");
      }
    }
  }

  return (
    <Container>
      <Background>
        <img src={bgLogin} alt="imagem login" />
      </Background>

      <Content>
        <AnimationConteiner err={err}>
          <div>
            <img src={handCard} alt="" />
            <h1>Controle Cartão de Crédito</h1>

            <Form ref={formRef} onSubmit={handleSubimit}>
              <Input name="email" type="text" placeholder="E-mail" />
              <Input name="password" type="password" placeholder="Senha" />

              <button type="submit">Entrar</button>
            </Form>

            {/* <Link to="/forgotPasword">Esqueci minha senha</Link> */}

            <Link to="/signup">
              <FiLogIn /> Criar conta
            </Link>
          </div>
        </AnimationConteiner>
      </Content>
    </Container>
  );
}

export default SignIn;
