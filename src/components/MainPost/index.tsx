import React from "react"

import * as S from "./styles"

import MainPostImage from "../../assets/imgs/main-post.png"
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon"

const MainPost: React.FC = () => {
  const post = {
    tag: "Crypto",
    title: "Bitcoin is the future",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis neque vel nisl ultricies placerat. Nulla facilisi. Nulla facilisi.",
    link: "https://google.com",
    readTime: "4 min",
    image: MainPostImage,
  }

  return (
    <S.Container>
      <S.ImgContainer>
        <S.Img src={post.image} alt={post.title} />
      </S.ImgContainer>
      <S.PostContainer>
        <S.PostContent>
          <S.PostInfos>
            <S.Tag>{post.tag}</S.Tag>
            <S.ReadTime>{post.readTime} read</S.ReadTime>
          </S.PostInfos>
          <S.Title>{post.title}</S.Title>
          <S.Description>{post.description}</S.Description>
        </S.PostContent>
        <S.PostLink href={post.link}>
          <span>Read more</span>
          <ChevronRightIcon />
        </S.PostLink>
      </S.PostContainer>
    </S.Container>
  )
}

export default MainPost
