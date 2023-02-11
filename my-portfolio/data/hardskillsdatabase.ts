interface HardDatabaseItemsProps {
  id: number | null
  db: string
}
interface HardSkillsDatabaseProps extends Array<HardDatabaseItemsProps>{}

export const hardskillsdatabase: HardDatabaseItemsProps[] = [
  {
    id: 1,
    db: "MySQL"
  },
  {
    id: 2,
    db: "Mongoose"
  },
  {
    id: 3,
    db: "Json-server"
  },
  {
    id: 4,
    db: "API REST + RESTFull"
  }
]