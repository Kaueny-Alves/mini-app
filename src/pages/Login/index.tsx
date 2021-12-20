import { useState, MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import marcaImg from "../../assets/marca_mini_app.png";
import setaImg from "../../assets/seta.png";
import { Btn } from '../../global';
import * as yup from "yup";
import { Card, ContainerLogin, ContentBtn, ContentImg, ContentInput, ContentSeta, Input, Error } from './styles';


export function Login() {

  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")

  const navigate = useNavigate()

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
      password: yup.string()
        .nullable()
        .min(6),
    });

    try {
      await schema.validate(({ name, password }))

      setStatus("success")
      return true
    } catch (err) {
      setStatus("error")
      return false
    }

  };


  return (
    <ContainerLogin>
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
          <p>Entrar</p>
        </ContentImg>
        <ContentInput>
          <Input
            type="text"
            value={name}
            onChange={handleName}
            placeholder="Nome"
          />
          <Input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder='Senha'
          />
        </ContentInput>
        <ContentBtn>
          <Btn color="greeny" onClick={handleButton}>Entrar</Btn>
        </ContentBtn>
        <Error>{status === 'error' ? <p>O email precisa ser válido e a senha deve ter no mínimo 6 caracteres!</p> : ""}</Error>
      </Card>
    </ContainerLogin>
  )
}
