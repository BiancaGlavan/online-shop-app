import styled from "styled-components";

interface IPropsButton {
    name: string;
    onClick: () => void;
}

const StyledButton = styled.button`

    border: none;
    outline: none;
    background-color: var(--button-color);
    padding: 20px 40px;
    color: var(--white-color);
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;

`;


const Button = ( {name, onClick}: IPropsButton) => {
  return (
   <StyledButton onClick={onClick}>{name}</StyledButton>
  )
}

export default Button;