import React from 'react';
import { Link } from 'react-router-dom';
import marcaImg from "../../assets/marca_mini_app.png";
import setaImg from "../../assets/seta.png";
import { ButtonGreen } from '../../components/Button';
import { Card, ContainerLogin, ContentBtn, ContentImg, ContentInput, ContentSeta, Input } from './styles';


export function Login() {
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
          <p>Login</p>
        </ContentImg>
        <ContentInput>
          <Input
            placeholder='Nome' />
          <Input
            placeholder='Senha' />
        </ContentInput>
        <ContentBtn>
          <Link to={'/lists'}>
            <ButtonGreen></ButtonGreen>
          </Link>
        </ContentBtn>
      </Card>
    </ContainerLogin>
  )
}
