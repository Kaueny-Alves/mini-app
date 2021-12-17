import React from 'react'
import marcaImg from "../../assets/marca_mini_app.png"
import responsiveImg from "../../assets/img_responsive.png"
import { ButtonGreen, ButtonOrange } from '../../components/Button'
import { Container, ContentImg, ContentBtn } from './styles'
import { Link } from 'react-router-dom'

export function Home() {


  return (
    <Container >
      <ContentImg>
        <img src={responsiveImg} alt='imagem de dispositivos eletronicos' className='responsiveImg' />
        <img src={marcaImg} alt='imagem do logo da marca' className='marcaImg' />
      </ContentImg>
      <ContentBtn>
        <Link to={'/register'}>
          <ButtonOrange />
        </Link>
        <Link to={'/login'}>
          <ButtonGreen />
        </Link>
      </ContentBtn>
    </Container>
  )
}