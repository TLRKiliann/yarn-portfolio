interface MyurlsItemsProps {
  id: number | null
  name: string
  url: string
}

interface MyurlsProps extends Array<MyurlsItemsProps>{}

export const myurls: MyurlsItemsProps[] = [
  {
    id: 1,
    name: "@github",
    url: 'https://github.com/TLRKiliann'
  },
  {
    id: 2,
    name: "@codepen.io",
    url: 'https://codepen.io/koalatr33'
  },
  {
    id: 3,
    name: "@youtube",
    url: 'https://www.youtube.com/@estebancatanea'
  },
  {
    id: 4,
    name: "@freecodecamp",
    url: 'https://www.freecodecamp.org/fcc9d247083-23e1-4bc7-ac80-47009c560173'
  },
  {
    id: 5,
    name: "@openclassroom",
    url: 'https://openclassrooms.com/fr/members/p4h3cxlsd5g1'
  },
  {
    id: 6,
    name: "@linkedin",
    url: 'https://www.linkedin.com/in/cedric-kuchen-dev/'
  }
]