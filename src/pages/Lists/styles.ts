import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .text {
    color: var(--brown);

  }
  .btn {
    border: none !important;
    margin: 5px;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const ContainerList = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--green);
  width: 40%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding-top: 20px;
  justify-content: space-around;
  height: 150px;
  width: 600px;
  @media (max-width:720){
    
  }
`;

export const ContentBtn = styled.div`
  display: flex;
  align-content: center;
  margin: 20px;
`;
