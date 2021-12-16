import styled from "styled-components";


export const Btn = styled.button`
align-items: center;
font-size: 1rem;
margin: 5px;
width: 200px;
height: 40px;
border: none;
border-radius: 5px;
background: ${(props) => props.color === "btnOrange" ?  "var(--orange)" : "var(--greeny)" };
color: ${(props) => props.color === "btnOrange"  ? "var(--cream)" : "var(--brown)" }
`

