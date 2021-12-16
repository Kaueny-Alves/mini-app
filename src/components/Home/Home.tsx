import React from 'react'
import marcaImg from "../../assets/marca_mini_app.png"
import responsiveImg from "../../assets/img_responsive.png"
import { ButtonGreen, ButtonOrange } from '../Button'
import { Container, ContentImg, ContentBtn } from './styles'

export function Home() {
  return (
    <Container >
      <ContentImg>
      <img src={responsiveImg} alt='imagem de dispositivos eletrônicos' className='responsiveImg' />
      <img src={marcaImg} alt='imagem do logo da marca' className='marcaImg' />
      </ContentImg>
      <ContentBtn>
      <ButtonOrange></ButtonOrange>
      <ButtonGreen></ButtonGreen>
      </ContentBtn>
    </Container>
  )
  }