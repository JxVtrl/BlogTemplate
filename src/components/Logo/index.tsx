import React from "react"
import LogoIcon from "../../assets/icons/LogoIcon"

import * as S from "./styles"

const Logo: React.FC = () => {
  return (
    <S.Container>
      <LogoIcon />
      <S.Title>Majors Studios</S.Title>
    </S.Container>
  )
}

export default Logo
