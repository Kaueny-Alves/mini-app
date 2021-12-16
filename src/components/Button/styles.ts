import styled from "styled-components";


export const Btn = styled.button`
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
margin: 0.25rem;
width: 200px;
height: 2.5rem;
border: 1px solid transparent;
border-radius: 0.25rem;
transition: border-color 0.2s;
background: ${(props) => props.color === "btnOrange" ?  "var(--orange)" : "var(--greeny)" };
color: ${(props) => props.color === "btnOrange"  ? "var(--cream)" : "var(--brown)" };

&:hover {
border-color: ${(props) => props.color === "btnOrange"  ? "var(--cream)" : "var(--brown)" };
}
`

