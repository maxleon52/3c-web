import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { toast } from "react-toastify";

import Input from "../../components/Input";
import { FiLogIn } from "react-icons/fi";

import { Container, Background, Content, AnimationConteiner } from "./styles";

import bgLogin from "../../assets/background-login.png";
import handCard from "../../assets/hand-card.svg";

function ForgotPassword() {
  const [err, setErr] = useState("");
  const formRef = useRef(null);

  async function handleSubimit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Favor inserir um e-mail válido."),
      });

      await schema.validate(data, { abortEarly: false });

      // Fazer recuperação de senha // ContextAPI

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
        return;
      }
      toast.info("Houve um erro inesperado, contate o suporte");
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
            <h1>Recuperação de senha</h1>

            <Form ref={formRef} onSubmit={handleSubimit}>
              <Input name="email" type="text" placeholder="E-mail" />

              <button type="submit">Recuperar</button>
            </Form>

            <Link to="/">
              <FiLogIn /> Fazer login
            </Link>
          </div>
        </AnimationConteiner>
      </Content>
    </Container>
  );
}

export default ForgotPassword;
