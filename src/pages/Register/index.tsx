import React, { useState, MouseEvent } from "react";
import { Card, ContainerRegister, ContentBtn, ContentImg, ContentInput, ContentSeta, Input, Error } from "./styles";
import { useNavigate } from "react-router-dom";
import marcaImg from "../../assets/marca_mini_app.png";
import cameraImg from "../../assets/camera.png"
import setaImg from "../../assets/seta.png";
import { Link } from "react-router-dom";
import { Btn } from "../../global";
import * as yup from "yup";


export function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  async function handleButton(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (await validate()) {
      const saveUser = true;
      saveUser ? navigate("/lists") : setStatus("error")
    }
  }

  async function validate() {

    let schema = yup.object().shape({
      name: yup.string()
        .nullable()
        .required(),
      email: yup.string()
        .email()
        .nullable()
        .required(),
      password: yup.string()
        .nullable()
        .min(6),
    });

    try {
      await schema.validate(({ name, email, password }))
      setStatus("success")
      return true
    } catch (err) {
      setStatus("error")
      return false
    }

  };


  return (
    <ContainerRegister>
      <ContentImg>
        <img src={marcaImg} alt='imagem do logo da marca' className='marcaImg' />
      </ContentImg>
      <Card>
        <ContentSeta>
          <Link to={'/'}>
            <img src={setaImg} alt='imagem do logo da marca' className='setaImg' />
          </Link>
        </ContentSeta>
        <ContentImg>
          <img src={cameraImg} alt='imagem do logo da marca' className='cameraImg' />
          <p>Criar Conta</p>
        </ContentImg>
        <ContentInput>
          <Input
            placeholder="Nome"
            name="name"
            type="text"
            value={name}
            onChange={handleName}
          />
          <Input
            placeholder="Endereço de e-mail"
            name="email"
            type="email"
            value={email}
            onChange={handleEmail}
          />
          <Input
            placeholder="Senha"
            name="password"
            type="password"
            value={password}
            onChange={handlePassword}
          />
        </ContentInput>
        <ContentBtn>
          <Btn color="orange" onClick={handleButton}>Criar Conta</Btn>
        </ContentBtn>
        <Error>{status === 'error' ? <p>Todos os campos devem ser preenchidos, o email deve ser válido e a senha deve ter no mínimo 6 caracteres!</p> : ""}</Error>
      </Card>
    </ContainerRegister>
  )
}

