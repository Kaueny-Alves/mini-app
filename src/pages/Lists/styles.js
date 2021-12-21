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

  ul.separator li {
    list-style: none;
    padding-left: 10px;
    color: #574437;
   
  }
  input {
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    content: "";
    color: #574437;
  }
  input.sub {
    margin-left: 50px;
    width: 14px;
    height: 14px;
    margin: 0px 0px 0px 20px;
    line-height: 14px;
    text-align: center;
    border: ${(props) =>
      props.color === "orange"
        ? "1px solid var(--orange)"
        : "1px solid var(--green)"};
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

export const ContentList = styled.div`
  padding: 5px 0px 0px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p, span {
    padding-left: 10px;
    color: #574437;
  }
  .tasks {
    display: flex;
    border-bottom: 1px solid var(--green);
    width: 700px;
    margin-left: 15px;
    
  }

  .sub-tasks {
    display: flex;
    margin-left: 30px;
  }
`;

export const ContainerList = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--green);
  width: 50%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding-top: 20px;
  justify-content: space-around;
  height: 150px;
  width: 600px;
  @media (max-width: 720) {
  }
`;

export const ContentBtn = styled.div`
   margin-right: 30px;
`;

export const ContentBtnSub = styled.div`
  padding-right: 50px;
`;
