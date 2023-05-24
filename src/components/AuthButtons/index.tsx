import React from "react"

import * as S from "./styles"

const AuthButtons: React.FC = () => {
  return (
    <S.Container>
      <S.Button variant="secondary">Login</S.Button>
      <S.Button variant="primary">Register</S.Button>
    </S.Container>
  )
}

export default AuthButtons
