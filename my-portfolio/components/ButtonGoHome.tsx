import { useRouter } from 'next/router'
import styles from '@/styles/ButtonGoHome.module.scss'

const ButtonGoHome = () => {
  const router = useRouter() as any

  const handleBackToHome = () => {
    router.replace("/")
  }

  return (
    <div className={styles.divbtn}>
      <button
        type='button'
        onClick={handleBackToHome}
        className={styles.btntopright}
      >
        Back to Home
      </button>
    </div>
  )
}

export default ButtonGoHome