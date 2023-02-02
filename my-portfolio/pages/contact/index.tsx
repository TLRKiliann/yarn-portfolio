import styles from '@/styles/Contact.module.scss'

const Contact:React.FC = () => {
  return (
    <>
      <div className={styles.contact}>
        
        <h1 className={styles.maintitlecontact}>Contact</h1>

        <div className={styles.divcontact}>
          <h3 className={styles.h3}>Cédric Kuchen</h3>
          <h3 className={styles.h3}>Software programmer & Web Developer</h3>
          <h3 className={styles.h3}>cedric.kuchen@protonmail.com</h3>
          <h3 className={styles.h3}>079 210 32 30</h3>
          <h3 className={styles.h3}>Lausanne (Switzerland)</h3>
        </div>

      </div>
    </>
  )
}

export default Contact