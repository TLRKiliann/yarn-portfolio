interface MyLeftItemsProps {
  id: number | any
  address: string
  name: string
}

interface MyLeftProps extends Array<MyLeftItemsProps>{}

export const leftItems: MyLeftItemsProps[] = [
  {
    id: 1,
    address: "/about",
    name: "About Me"
  },
  {
    id: 2,
    address: "/skills",
    name: "Skills"
  },
  {
    id: 3,
    address: "/projects",
    name: "Projects"
  },
  {
    id: 4,
    address: "/gallery",
    name: "Gallery"
  },
  {
    id: 5,
    address: "/contact",
    name: "Contact"
  },
]