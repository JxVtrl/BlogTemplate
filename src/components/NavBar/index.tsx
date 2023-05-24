import React, { useState } from "react"

import * as S from "./styles"
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon"

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<number | null>(null)

  const navItems = [
    {
      id: 0,
      title: "Home",
      link: "/",
    },
    {
      id: 1,
      title: "Concept",
      items: [
        {
          id: 0,
          title: "Concept 1",
          link: "/concept/1",
        },
        {
          id: 1,
          title: "Concept 2",
          link: "/concept/2",
        },
        {
          id: 2,
          title: "Concept 3",
          link: "/concept/3",
        },
      ],
    },
    {
      id: 2,
      title: "Our story",
      link: "/story",
    },
    {
      id: 3,
      title: "Blog",
      link: "/blog",
    },
    {
      id: 4,
      title: "Contact",
      link: "/contact",
    },
  ]

  return (
    <S.Container>
      {navItems.map((item) => {
        return (
          <S.NavItem
            key={item.id}
            onClick={() => {
                if (item.items) {
                  if(isMenuOpen !== item.id) {
                    setIsMenuOpen(item.id)
                  } else {
                    setIsMenuOpen(null)
                  }
              } else {
                setIsMenuOpen(null)
              }
            }}
          >
            <S.NavLink href={item.link}>{item.title}</S.NavLink>
            {item.items && (
              <>
                <ChevronDownIcon />

                <S.NavSubList visible={isMenuOpen === item.id}>
                  {item.items.map((subItem) => {
                    return (
                      <S.NavSubItem key={subItem.id}>
                        <S.NavSubLink href={subItem.link}>
                          {subItem.title}
                        </S.NavSubLink>
                      </S.NavSubItem>
                    )
                  })}
                </S.NavSubList>
              </>
            )}
          </S.NavItem>
        )
      })}
    </S.Container>
  )
}

export default NavBar
