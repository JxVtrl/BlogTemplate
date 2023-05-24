import React from "react"

import * as S from "./styles"

import HeadBackground from "../../assets/imgs/head-background.png"
import ShinyIcon from "../../assets/icons/ShinyIcon"

const AppHeader: React.FC = () => {
  return (
    <S.Container>
      <S.Background src={HeadBackground} />
      <S.Tag>
        <S.TagText>Majors Blog</S.TagText>
        <ShinyIcon />
      </S.Tag>
      <S.Title>News and insights</S.Title>
      <S.Subtitle>
        Learn about cryptocurrency, NFTs, and blockchain, discover our latest
        product updates, partnership announcements, user stories, and more.
      </S.Subtitle>
    </S.Container>
  )
}

export default AppHeader
