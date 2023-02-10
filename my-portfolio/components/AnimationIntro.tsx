import styles from '@/styles/Home.module.scss'

const AnimationIntro = () => {
  return (
    <div className={styles.maindivanimation}>
      <div className={styles.firstdivanimation}>
        <div className={styles.subdivfirstanimation}>
          <h2>Wellcome to my portfolio !</h2>
        </div>
      </div>

      <div className={styles.seconddivanimation}>
        <div className={styles.subdivsecondanimation}>
          <h2>I'm a web developer.</h2>
        </div>
      </div>

      <div className={styles.thirddivanimation}>
        <div className={styles.subdivthirdanimation}>
          <h2>Enjoy this visit !</h2>
        </div>
      </div>
    </div>
  )
}
export default AnimationIntro