import React from 'react';
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
      <img src={setaImg} alt='imagem do logo da marca' className='setaImg' />
      </ContentSeta>
      <ContentImg>
        <p>Entrar</p>
      </ContentImg>
        <ContentInput>
        <Input/> 
        <Input/> 
      
        </ContentInput>
        <ContentBtn>
        <ButtonGreen></ButtonGreen>
        </ContentBtn>
      </Card>
  </ContainerLogin>
  )
}
