import styles from '@/styles/About.module.scss'

const ThirdArticle:React.FC = () => {
  return (
    <div className={styles.article3}>
      <h2 className={styles.h2}>Personnalité</h2>
      <p className={styles.p}>
        Je suis quelqu'un de rigoureux, structuré et consciencieux. Je me tiens 
        informé sur les technologies, la sécurité ainsi que sur les bonnes 
        pratiques.
      </p>
    </div>
  )
}
export default ThirdArticle