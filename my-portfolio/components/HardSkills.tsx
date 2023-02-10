import { useState } from "react"
import { hardskillscode } from "../data/hardskillscode"
import { hardskillsstyles } from "../data/hardskillsstyles"
import { hardskillsdatabase } from "../data/hardskillsdatabase"
import { hardskillstesting } from "../data/hardskillstesting"
import { frameworks } from "../data/frameworks"
import { hardskillssecurity } from "../data/hardskillssecurity"
import styles from '@/styles/Skills.module.scss'

interface HardSkillsProps {
  id: number | null
  hardcode: string
}
interface HardSkillsCodeProps extends Array<HardSkillsProps>{}

interface SkillStylesProps {
  id: number | null
  style: string
}
interface SkillsStylesProps extends Array<SkillStylesProps>{}

interface HardDatabaseItemsProps {
  id: number | null
  db: string
}
interface HardSkillsDatabaseProps extends Array<HardDatabaseItemsProps>{}

interface FrameworksItemsProps {
  id: number | null
  framework: string
}
interface FrameworksProps extends Array<FrameworksItemsProps>{}

interface HardSkillsTestingItemsProps {
  id: number | null
  tester: string
}
interface HardSkillsTestingProps extends Array<HardSkillsTestingItemsProps>{}

interface SecurityItemsProps {
  id: number | null
  security: string
}
interface SecurityProps extends Array<SecurityItemsProps>{}

interface handleClickBtnProps {
  handleClickBtn: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const HardSkills = ({ handleClickBtn }: handleClickBtnProps) => {
  const [hardSkills] = useState<HardSkillsProps[]>(hardskillscode)
  const [stylesSkills] = useState<SkillStylesProps[]>(hardskillsstyles)
  const [hardSkillsDb] = useState<HardDatabaseItemsProps[]>(hardskillsdatabase)
  const [newFrameWorks] = useState<FrameworksItemsProps[]>(frameworks)
  const [hardSkillsTesting] = useState<HardSkillsTestingItemsProps[]>(hardskillstesting)
  const [hardSkillsSecurtity] = useState<SecurityItemsProps[]>(hardskillssecurity)
  return (
    <div>
      <div className={styles.sectionone}>
      
        <button type='button'
          onClick={handleClickBtn}
          className={styles.btnhard}
        >
          Soft Skills
        </button>

        <h2 className={styles.secondtitle}>
          Hard Skills
        </h2>

        <div className={styles.mainblocdiv}>

          <div className={styles.subblockdiv}>
          
            <h2 className={styles.h2titlesubblock}>
              Code :
            </h2>

            <div className={styles.blocli}>
              {hardSkills.map((newHardSkill: any) => (
                <li key={newHardSkill.id} 
                  className={styles.listhard}>
                  <a className={styles.classa}>
                    {newHardSkill.hardcode}
                  </a>
                </li>
                )
              )}
            </div>
          </div>

          <div className={styles.subblockdiv}>

            <h2 className={styles.h2titlesubblock}>
              Styles :
            </h2>

            <div className={styles.blocli}>
              {stylesSkills.map((styleSkill: any) => (
                <li key={styleSkill.id} className={styles.listhard}>
                  <a className={styles.classa}>
                    {styleSkill.style}
                  </a>
                </li>
                )
              )}
            </div>
          </div>

          <div className={styles.subblockdiv}>
            <h2 className={styles.h2titlesubblock}>
              Database :
            </h2>

            <div className={styles.blocli}>
              {hardSkillsDb.map((hardSkillDb: any) => (
                <li className={styles.listhard}>
                  <a className={styles.classa}>
                    {hardSkillDb.db}
                  </a>
                </li>
                )
              )}
            </div>
          </div>

          <div className={styles.subblockdiv}>
            <h2 className={styles.h2titlesubblock}>
              Framework :
            </h2>

            <div className={styles.blocli}>
              {newFrameWorks.map((frame: any) => (
                <li key={frame.id} className={styles.listhard}>
                  <a className={styles.classa}>
                    {frame.framework}
                  </a>
                </li>
                )
              )}
            </div>
          </div>

          <div className={styles.subblockdiv}>
            <h2 className={styles.h2titlesubblock}>
              Testing :
            </h2>

            <div className={styles.blocli}>
              {hardSkillsTesting.map((hardSkillTest: any) => (
                <li key={hardSkillTest.id} className={styles.listhard}>
                  <a className={styles.classa}>
                    {hardSkillTest.tester}
                  </a>
                </li>
                )
              )}
            </div>
          </div>

          <div className={styles.subblockdiv}>
            <h2 className={styles.h2titlesubblock}>
              Security :
            </h2>

            <div className={styles.blocli}>
              {hardSkillsSecurtity.map((skillsSecurity: any) => (
                <li key={skillsSecurity.id} className={styles.listhard}>
                  <a className={styles.classa}>
                    {skillsSecurity.security}
                  </a>
                </li>
                )
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default HardSkills
