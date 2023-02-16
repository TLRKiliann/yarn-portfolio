import styles from '@/styles/Home.module.scss'

const AnimationIntro = () => {
  return (
    <div className={styles.maindivanimation}>
      <div className={styles.firstdivanimation}>
        <div className={styles.subdivfirstanimation}>
          <h2>Bienvenue dans mon portfolio !</h2>
        </div>
      </div>

      <div className={styles.seconddivanimation}>
        <div className={styles.subdivsecondanimation}>
          <h2>Je m'appelle Cédric.</h2>
        </div>
      </div>

      <div className={styles.thirddivanimation}>
        <div className={styles.subdivthirdanimation}>
          <h2>Enjoy !</h2>
        </div>
      </div>
    </div>
  )
}
export default AnimationIntro