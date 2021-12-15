import logoImg from "../../assets/logo.png"
import avatarImg from "../../assets/avatar.png"
import { Avatar, Container } from "./styles"


export function Header() {
  return (
    <Container >
      
      <img src={logoImg}  alt='logo do it now'/>
      <Avatar>
      <img src={avatarImg}  alt='avatar usuário'/>
      <p>Usuário 1</p>
      </Avatar>
    
    </Container>
  )
}
