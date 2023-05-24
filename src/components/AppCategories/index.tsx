import React, { useState } from "react"

import * as S from "./styles"

const AppCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0)

  const categoryList = [
    {
      id: 0,
      title: "View All",
    },
    {
      id: 1,
      title: "Crypto",
    },
    {
      id: 2,
      title: "Blockchain",
    },
    {
      id: 3,
      title: "NFT",
    },
    {
      id: 4,
      title: "People",
    },
    {
      id: 5,
      title: "Engineering",
    },
  ]

  return (
    <S.Container>
      {categoryList.map((category, index) => {
        return (
          <S.Category
            key={index}
            selected={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.title}
          </S.Category>
        )
      })}
    </S.Container>
  )
}

export default AppCategories
