interface HardSkillsProps {
  id: number | null
  hardcode: string
}

interface HardSkillsCodeProps extends Array<HardSkillsProps>{}

export const hardskillscode: HardSkillsProps[] = [
  {
    id: 1,
    hardcode: "Python3"
  },
  {
    id: 2,
    hardcode: "HTML"
  },
  {
    id: 3,
    hardcode: "JavaScript"
  },
  {
    id: 4,
    hardcode: "TypeScript"
  }
]