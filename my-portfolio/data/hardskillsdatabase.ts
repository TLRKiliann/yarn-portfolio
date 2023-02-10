interface HardDatabaseItemsProps {
  id: number | null
  db: string
}

interface HardSkillsDatabaseProps extends Array<HardDatabaseItemsProps>{}

export const hardskillsdatabase: HardDatabaseItemsProps = [
  {
    id: 1,
    db: "MySQL"
  },
  {
    id: 1,
    db: "Mongoose"
  },
  {
    id: 1,
    db: "Json-server"
  },
  {
    id: 1,
    db: "API REST + RESTFull"
  }
]