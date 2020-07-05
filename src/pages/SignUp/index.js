import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import * as Yup from "yup";
import Input from "../../components/Input";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Background, Content, AnimationConteiner } from "./styles";

import bgLogin from "../../assets/background-signup.png";
import handCard from "../../assets/hand-card.svg";

function SignUp() {
  const [err, setErr] = useState("");
  const formRef = useRef(null);

  async function handleSubimit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Favor inserir um e-mail válido."),
        password: Yup.string()
          .required("Senha obrigatória")
          .min(6, "No mínimo 6 dígitos"),
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
      <Content>
        <AnimationConteiner err={err}>
          <div>
            <img src={handCard} alt="" />
            <h1>Controle Cartão de Crédito</h1>

            <Form ref={formRef} onSubmit={handleSubimit}>
              <Input name="name" type="text" placeholder="Nome" />
              <Input name="email" type="email" placeholder="E-mail" />
              <Input name="password" type="password" placeholder="Senha" />

              <button type="submit">Criar conta</button>
            </Form>

            <Link to="/">
              <FiArrowLeft /> Já tenho conta
            </Link>
          </div>
        </AnimationConteiner>
      </Content>
      <Background>
        <img src={bgLogin} alt="imagem login" />
      </Background>
    </Container>
  );
}

export default SignUp;
