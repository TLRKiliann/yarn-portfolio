import { useRouter } from 'next/router'
import Layout from "../../components/Layout"
import styles from '@/styles/Contact.module.scss'

const Contact:React.FC = () => {
  const router = useRouter()

  const handleBackToHome = () => {
    router.replace("/")
  }

  return (
    <Layout>
      <div className={styles.contact}>
        
        <div className={styles.divbtn}>
          <button
            type='button'
            onClick={handleBackToHome}
            className={styles.btntopright}
          >
            Back to Home
          </button>
        </div>


        <h1 className={styles.maintitlecontact}>Contact</h1>

        <div className={styles.divcontact}>
          <div className={styles.divh3first}>
            <h3 className={styles.h3}>Cédric Kuchen</h3>
          </div>
          <div className={styles.divh3second}>
            <h3 className={styles.h3}>Software programmer & Web Developer</h3>
          </div>
          <div className={styles.divh3third}>
            <h3 className={styles.h3}>cedric.kuchen@protonmail.com</h3>
          </div>
          <div className={styles.divh3fourth}>
            <h3 className={styles.h3}>079 210 32 30</h3>
          </div>
          <div className={styles.divh3fifth}>
            <h3 className={styles.h3}>Lausanne (Switzerland)</h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact