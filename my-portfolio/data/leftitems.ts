interface MyLeftItemsProps {
  id: number | any
  address: string
  name: string
}

interface MyLeftProps extends Array<MyLeftItemsProps>{}

export const leftitems: MyLeftItemsProps[] = [
  {
    id: 1,
    address: "/about",
    name: "About Me"
  },
  {
    id: 2,
    address: "/evolution",
    name: "Evolution"
  },
  {
    id: 3,
    address: "/skills",
    name: "Skills"
  },
  {
    id: 4,
    address: "/projects",
    name: "Projects"
  },
  {
    id: 5,
    address: "/gallery",
    name: "Gallery"
  },
  {
    id: 6,
    address: "/contact",
    name: "Contact"
  }
]