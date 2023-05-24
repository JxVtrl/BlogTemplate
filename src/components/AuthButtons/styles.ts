import { styled } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
gap: 12px;
  
`

interface ButtonProps {
    variant: "primary" | "secondary"
}

export const Button = styled.button<ButtonProps>`
    background-color: ${({ variant }) =>
    variant === "primary" ? "#444BFF" : "#fff"};
    border: 1px solid #444BFF;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    font-family: "Lato";
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${({ variant }) => (variant === "primary" ? "#fff" : "#444BFF")};
    transition: all 0.2s ease-in-out;


`