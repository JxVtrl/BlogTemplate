import React from "react"

import * as S from "./styles"

interface PostProps {
  tag: string
  title: string
  description: string
  link: string
  readTime: string
  image: string
}

const Post: React.FC<PostProps> = ({
  description,
  image,
  link,
  readTime,
  tag,
  title,
}) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={image} alt={title} />
      </S.ImageContainer>
      <S.Content>
        <S.Infos>
          <S.Tag>{tag}</S.Tag>
          <S.ReadTime>{readTime} read</S.ReadTime>
        </S.Infos>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Link href={link}>Read more</S.Link>
      </S.Content>
    </S.Container>
  )
}

export default Post
