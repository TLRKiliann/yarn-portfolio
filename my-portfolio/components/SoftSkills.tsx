import styles from '@/styles/Skills.module.scss'

type SoftSkillsProps = {
  handleClickBtn: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const SoftSkills = ({handleClickBtn}: SoftSkillsProps) => {
  return (
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
        <div className={styles.divlist}>
          <li className={styles.listsoft}>
            <a className={styles.linka}>
              Esprit d'analyse.
            </a>
          </li>
        </div>
        <div className={styles.divlist}>
          <li className={styles.listsoft}>
            <a className={styles.linka}>
              Esprit de conceptualisation.
            </a>
          </li>
        </div>
        <div className={styles.divlist}>
          <li className={styles.listsoft}>
            <a className={styles.linka}>
              Sensible à la sécurité des SI.
            </a>
          </li>
        </div>
        <div className={styles.divlist}>
          <li className={styles.listsoft}>
            <a className={styles.linka}>
              Capacité à se remettre en question.
            </a>
          </li>
        </div>
        <div className={styles.divlist}>
          <li className={styles.listsoft}>
            <a className={styles.linka}>
              Sens de l'organisation.
            </a>
          </li>
        </div>
        <div className={styles.divlist}>
          <li className={styles.listsoft}>
            <a className={styles.linka}>
              Personnalité calme et empathique.
            </a>
          </li>
        </div>
      </div>
    </div>
  )
}
export default SoftSkills