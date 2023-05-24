import React from "react"

import * as S from "./styles"
import MainPost from "../MainPost"
import Post from "../Post"

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
      image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 1,
      tag: "People",
      title: "People are awesome",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis neque vel nisl ultricies placerat. Nulla facilisi. Nulla facilisi.",
      link: "https://google.com",
      readTime: "3 min",
      image: 'https://images.unsplash.com/photo-1523800378286-dae1f0dae656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFubmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      tag: "NFT",
      title: "NFT is the future",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis neque vel nisl ultricies placerat. Nulla facilisi. Nulla facilisi.",
      link: "https://google.com",
      readTime: "4 min",
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      tag: "Crypto",
      title: "Bitcoin is the future",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis neque vel nisl ultricies placerat. Nulla facilisi. Nulla facilisi.",
      link: "https://google.com",
      readTime: "4 min",
      image: 'https://images.unsplash.com/photo-1625662171891-9a3348f961f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      tag: "Blockchain",
      title: "Blockchain is the future",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis neque vel nisl ultricies placerat. Nulla facilisi. Nulla facilisi.",
      link: "https://google.com",
      readTime: "5 min",
      image: 'https://images.unsplash.com/photo-1614850715661-902fd7e93c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 5,
      tag: "People",
      title: "People are awesome",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis neque vel nisl ultricies placerat. Nulla facilisi. Nulla facilisi.",
      link: "https://google.com",
      readTime: "3 min",
      image: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFubmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
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
