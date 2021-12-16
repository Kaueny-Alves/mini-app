import { Card, ContainerRegister, ContentBtn, ContentImg, ContentInput, ContentSeta, Input } from "./styles";
import React from 'react'
import marcaImg from "../../assets/marca_mini_app.png";
import cameraImg from "../../assets/camera.png"
import setaImg from "../../assets/seta.png";
import { ButtonOrange } from "../../components/Button";
import { Link } from "react-router-dom";


export function Register() {
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
          <Input placeholder="Nome" />
          <Input placeholder="Endereço de e-mail" />
          <Input placeholder="Senha" />
        </ContentInput>
        <ContentBtn>
            <ButtonOrange></ButtonOrange>
        </ContentBtn>
      </Card>
    </ContainerRegister>
  )
}