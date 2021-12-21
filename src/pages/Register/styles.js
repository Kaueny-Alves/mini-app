import styled from "styled-components";

export const ContainerRegister = styled.div`
  background-image: url("/pattern.png");
  background-repeat: repeat;
  background-color: wheat;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Card = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--cream);
  width: 500px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 0px 6px 0px 0px rgba(0, 0, 0, 0.2) ;
  @media (max-width: 720px) {
    width: 350px;
    height: 500px;
  }
`;

export const ContentInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 300px;
  height: 40px;
  font-size:1rem;
  padding-left: 10px;
  border-radius: 5px;
  border:1px solid #b4b4b4;
`;

export const ContentImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  p{
    font-size: 1.6rem;
    margin: 10px;
  }
`;

export const ContentSeta = styled.div`
 width: 490px;
 padding: 10px;
 @media (max-width: 720px) {
    width: 340px;
  }
`;

export const ContentBtn = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const Error = styled.span`
  padding: 10px;
  color: var(--brown);
`;