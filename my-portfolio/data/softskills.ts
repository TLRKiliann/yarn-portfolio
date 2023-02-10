interface SoftSkillsItemsProps {
  id: number | null
  skill: string
}

interface SoftskillsProps extends Array<SoftSkillsItemsProps>{}

export const softskills: SoftSkillsItemsProps[] = [
  {
    id: 1,
    skill: "Esprit d'analyse."
  },
  {
    id: 2,
    skill: "Esprit de conceptualisation."
  },
  {
    id: 3,
    skill: "Attentif à la sécurité des SI et data sensibles."
  },
  {
    id: 4,
    skill: "Capacité à se remettre en question."
  },
  {
    id: 5,
    skill: "Sens de l'organisation."
  },
  {
    id: 6,
    skill: "Personnalité calme et sérieux."
  }
]