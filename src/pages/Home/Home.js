import React from 'react'
import marcaImg from "../../assets/marca_mini_app.png"
import responsiveImg from "../../assets/img_responsive.png"
import { Container, ContentImg, ContentBtn } from './styles'
import { Link } from 'react-router-dom'
import { Btn } from '../../global'


export function Home(props) {

  return (
    <Container >
      <ContentImg>
        <img src={responsiveImg} alt='imagem de dispositivos eletronicos' className='responsiveImg' />
        <img src={marcaImg} alt='imagem do logo da marca' className='marcaImg' />
      </ContentImg>
      <ContentBtn>
        <Link to={'/register'}>
        <Btn color="orange">Criar Conta</Btn>
        </Link>
        <Link to={'/login'}>
        <Btn color="greeny">Entrar</Btn>
        </Link>
      </ContentBtn>
    </Container>
  )
}