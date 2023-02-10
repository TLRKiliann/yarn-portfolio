import { useState } from "react"
import { softskills } from "../data/softskills"
import styles from '@/styles/Skills.module.scss'

interface SoftSkillsItemsProps {
  id: number | null
  skill: string
}

interface SoftskillsProps extends Array<SoftSkillsItemsProps>{}

interface HandleClickBtnProps {
  handleClickBtn: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const SoftSkills = ({ handleClickBtn }: HandleClickBtnProps) => {
  const [newSkills] = useState<SoftSkillsItemsProps[]>(softskills)
  return (
    <>
      <div className={styles.sectiontwo}>
        
        <button type='button'
          onClick={handleClickBtn}
          className={styles.btnsoft}
        >
          Hard Skills
        </button>

        <h2 className={styles.secondtitle}>
          Softs Skills
        </h2>

        <div style={{marginLeft: "0px"}}>

          {newSkills.map((newSkill: any) => (
            <div key={newSkill.id} className={styles.divlist}>
              <li className={styles.listsoft}>
                <a className={styles.linka}>
                  {newSkill.skill}
                </a>
              </li>
            </div>
          ))}
        
        </div>
      </div>
    </>
  )
}
export default SoftSkills