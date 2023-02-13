interface MyProjectsItemsProps {
  id: number | null
  name: string
  url: string
}

interface MyProjectsProps extends Array<MyProjectsItemsProps>{}

export const myprojects: MyProjectsItemsProps[] = [
  {
    id: 1,
    name: "NextJS API (Restfull)",
    url: 'https://github.com/TLRKiliann/nextjs-api'
  },
  {
    id: 2,
    name: "MERN-stack Chat application (Vite-React-TS + MySQL)",
    url: 'https://github.com/TLRKiliann/mernstack-api'
  },
  {
    id: 3,
    name: "e-commerce (React + Mongoose)",
    url: 'https://github.com/TLRKiliann/typescript-e-commerce'
  },
  {
    id: 4,
    name: "TimeTrack (Web App Python3 SSH SCP MySQL)",
    url: 'https://github.com/TLRKiliann/timetrack'
  },
  {
    id: 5,
    name: "Anxious-Scale Psychiatry Evaluation (Python3 stand-alone)",
    url: 'https://github.com/TLRKiliann/anxious_scale'
  },
  {
    id: 6,
    name: "Mon premier Serveur (PhP MySQL)",
    url: 'https://github.com/TLRKiliann/server-PHP-MySQL'
  }
]