import styles from '@/styles/About.module.scss'

const SixthArticle:React.FC = () => {
  return (
    <div className={styles.article6}>
      <h2 className={styles.h2}>Valeurs</h2>
      <p className={styles.p}>
        Le domaine des soins m'a appris à réfléchir avant, pendant et après l'action.
        Par conséquent, la remise en question fait partie intégrante de ma personne.
        Réfléchir sur les paramètres à prendre en compte et trouver des solutions 
        sont 2 points essentiels à mes yeux dans le développement web.
      </p>
      <p className={styles.p}>
        Les soins m'ont également permis d'exercer l'identification des situations
        problèmes et de faire des liens pour les résoudre.
      </p>
      <p className={styles.p}>
        Les valeurs que je compte mettre à profit dans une entreprise sont 
        mes connaissances, ma réflexion et ma créativité.
      </p>
    </div>
  )
}
export default SixthArticle
