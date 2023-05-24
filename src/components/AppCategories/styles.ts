import { css, styled } from "styled-components"

export const Container = styled.div`
  width: fit-content;
  margin: 48px auto 0;
  display: flex;
  align-items: center;

  background-color: #fff;
  padding: 8px;
  box-shadow: 0px 4px 10px rgba(17, 17, 17, 0.02);
  border-radius: 6px;
  gap: 4px;
`

interface CategoryProps {
  selected: boolean
}

export const Category = styled.div<CategoryProps>`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #111111;

  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #444bff;
      color: #fff;
      font-weight: 700;
    `}
`
