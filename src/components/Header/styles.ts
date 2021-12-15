import styled from "styled-components";

export const Container = styled.div`
  background: var(--brown);
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img{
    max-width:200px;
    max-height:150px;
    width: auto;
    height: auto;
  }
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  p{
    color: var(--cream);
  }
`