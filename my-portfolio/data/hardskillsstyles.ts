interface SkillStylesProps {
  id: number | null
  style: string
}

interface HardSkillsStylesProps extends Array<SkillStylesProps>{}

export const hardskillsstyles: SkillStylesProps[] = [
  {
    id: 1,
    style: "CSS"
  },
  {
    id: 2,
    style: "Sass"
  },
  {
    id: 3,
    style: "Bootstrap"
  },
  {
    id: 4,
    style: "Tailwind"
  }
]