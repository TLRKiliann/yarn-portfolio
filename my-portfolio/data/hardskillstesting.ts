interface HardSkillsTestingItemsProps {
  id: number | null
  tester: string
}
interface HardSkillsTestingProps extends Array<HardSkillsTestingItemsProps>{}

export const hardskillstesting: HardSkillsTestingItemsProps[] = [
  {
    id: 1,
    tester: "React testing library"
  },
  {
    id: 2,
    tester: "Jest"
  },
  {
    id: 3,
    tester: "Vitest"
  },
  {
    id: 4,
    tester: "Cypress"
  }
]