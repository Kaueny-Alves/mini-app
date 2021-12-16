import styled from "styled-components";

export const ContainerLogin = styled.div`
  background-image: url("/pattern.png");
  background-repeat: repeat;
  background-color: wheat;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--cream);
  width: 500px;
  height: 500px;
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
`;

export const ContentImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  p{
    font-size: 1.6rem;
    margin: 30px;
  }
`;

export const ContentSeta = styled.div`
 width: 490px;
 padding: 10px;
`;

export const ContentBtn = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
