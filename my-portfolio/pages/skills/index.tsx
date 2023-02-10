
import { useState } from "react"
import Layout from "../../components/Layout"
import ButtonGoHome from "../../components/ButtonGoHome"
import HardSkills from "../../components/HardSkills"
import SoftSkills from "../../components/SoftSkills"
import styles from '@/styles/Skills.module.scss'

const Skills:React.FC = () => {

  const [switchBtn, setSwitchBtn] = useState<boolean>(false)

  const handleClickBtn = () => {
    setSwitchBtn(switchBtn => !switchBtn)
  }

  return (
    <Layout>
      <div className={styles.skills}>

        <ButtonGoHome />

        <div className={styles.mainclassvideo}>
          <video 
            width="100%"
            height="100%"
            autoPlay 
            muted 
            loop 
            className={styles.divvideointro}>
            <source src={"./videos/lightning.mp4"} type="video/mp4"/>
          </video>
        </div>

        <h1 className={styles.mainheaderskills}>Skills</h1>

        {!switchBtn ? (
          <HardSkills
            handleClickBtn={handleClickBtn} />
          ) : (
          <SoftSkills
            handleClickBtn={handleClickBtn} />
          )
        }
      </div>
    </Layout>
  )
}
export default Skills