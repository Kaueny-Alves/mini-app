import { Card, ContainerRegister, ContentBtn, ContentImg, ContentInput, ContentSeta, Input } from "./styles";
import React from 'react'
import marcaImg from "../../assets/marca_mini_app.png";
import cameraImg from "../../assets/camera.png"
import setaImg from "../../assets/seta.png";
import { ButtonOrange } from "../../components/Button";


export function Register() {
  return (
    <ContainerRegister>
      <ContentImg>
      <img src={marcaImg} alt='imagem do logo da marca' className='marcaImg' />
      </ContentImg>
      <Card>
        <ContentSeta>
      <img src={setaImg} alt='imagem do logo da marca' className='setaImg' />
      </ContentSeta>
      <ContentImg>
      <img src={cameraImg} alt='imagem do logo da marca' className='cameraImg' />
        <p>Criar Conta</p>
      </ContentImg>
        <ContentInput>
        <Input/> 
        <Input/> 
        <Input/>  
        </ContentInput>
        <ContentBtn>
        <ButtonOrange></ButtonOrange>
        </ContentBtn>
      </Card>
    </ContainerRegister>
  )
}