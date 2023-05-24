import React from "react"

import * as S from "./styles"
import MainPost from "../MainPost"
import Post from "../Post"

import PostImage1 from "../../assets/imgs/posts/Image1.png"
import PostImage2 from "../../assets/imgs/posts/Image2.png"
import PostImage3 from "../../assets/imgs/posts/Image3.png"
import PostImage4 from "../../assets/imgs/posts/Image4.png"
import PostImage5 from "../../assets/imgs/posts/Image5.png"
import PostImage6 from "../../assets/imgs/posts/Image.png"

const AppBlogGrid: React.FC = () => {
  const postsList = [
    {
      id: 0,
      tag: "Blockchain",
      title: "Blockchain is the future",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis neque vel nisl ultricies placerat. Nulla facilisi. Nulla facilisi.",
      link: "https://google.com",
      readTime: "5 min",
      image: PostImage1,
    },
    {
      id: 1,
      tag: "People",
      title: "People are awesome",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis neque vel nisl ultricies placerat. Nulla facilisi. Nulla facilisi.",
      link: "https://google.com",
      readTime: "3 min",
      image: PostImage2,
    },
    {
      id: 2,
      tag: "NFT",
      title: "NFT is the future",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis neque vel nisl ultricies placerat. Nulla facilisi. Nulla facilisi.",
      link: "https://google.com",
      readTime: "4 min",
      image: PostImage3,
    },
    {
      id: 3,
      tag: "Crypto",
      title: "Bitcoin is the future",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis neque vel nisl ultricies placerat. Nulla facilisi. Nulla facilisi.",
      link: "https://google.com",
      readTime: "4 min",
      image: PostImage4,
    },
    {
      id: 4,
      tag: "Blockchain",
      title: "Blockchain is the future",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis neque vel nisl ultricies placerat. Nulla facilisi. Nulla facilisi.",
      link: "https://google.com",
      readTime: "5 min",
      image: PostImage5,
    },
    {
      id: 5,
      tag: "People",
      title: "People are awesome",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis neque vel nisl ultricies placerat. Nulla facilisi. Nulla facilisi.",
      link: "https://google.com",
      readTime: "3 min",
      image: PostImage6,
    },
  ]

  return (
    <S.Container>
      <MainPost />
      <S.PostContainer>
        {postsList.map((post) => (
          <Post
            key={post.id}
            tag={post.tag}
            title={post.title}
            description={post.description}
            link={post.link}
            readTime={post.readTime}
            image={post.image}
          />
        ))}
      </S.PostContainer>
    </S.Container>
  )
}

export default AppBlogGrid
