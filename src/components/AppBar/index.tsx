import React from "react"

import * as S from "./styles"
import Logo from "../Logo"
import { AuthButtons, NavBar } from ".."

const AppBar: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />
        <NavBar />
        <AuthButtons/>
      </S.Content>
    </S.Container>
  )
}

export default AppBar
