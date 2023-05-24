import { styled } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 56px;

  font-family: "Lato";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: #111111;
`

export const NavItem = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  cursor: pointer;
`

export const NavLink = styled.a`
  text-decoration: none;

  color: #111111;
`

interface MenuProps {
  visible: boolean
}

export const NavSubList = styled.div<MenuProps>`
  position: absolute;
  top: 32px;
  left: -5px;

  width: 100px;

  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  gap: 8px;

  padding: 0;
`

export const NavSubItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  /* :hover {
    font-weight: 700;
  } */
`

export const NavSubLink = styled.a`
  text-decoration: none;
  color: #111111;
`
