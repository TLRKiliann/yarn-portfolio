import styles from '@/styles/About.module.scss'

const SecondArticle = () => {
  return (
    <div className={styles.article2}>
      <h2 className={styles.h2}>Motivation</h2>
      <p className={styles.p}>
        L'informatique a peu à peu pris place dans ma vie. Dés lors, j'ai réalisé
        que rien ne m'empêchait de faire de ma passion un métier.
        Mon expérience dans les soins m'a permis de m'intéresser 
        à des domaines complexes, tels que la neurologie et la psychiatrie.
      <br />
        J'aime démystifier ce qui semble complexe, au premier abord. Quand on
        dispose des connaissances, il n'y a rien de magique finalement.
      </p>
    </div>
  )
}
export default SecondArticle