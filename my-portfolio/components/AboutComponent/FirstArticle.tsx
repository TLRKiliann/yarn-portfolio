import styles from '@/styles/About.module.scss'

const FirstArticle:React.FC = () => {
  return (
    <div className={styles.article}>
      <h2 className={styles.h2}>Story</h2>
      <p className={styles.p}>
        Depuis 7 ans et au fil de mes réalisations, j'ai vu ma motivation
        croître pour l'informatique. En parallèle, j'ai vu ma motivation décliner
        pour les soins. A mes débuts, je me suis amusé à concevoir un site internet
        sur la neurologie et la psychiatrie avec HTML, CSS, PhP, MySQL sur Raspberry pi
        en mode WAN. Puis, j'ai appris python3 et j'ai fais une application de soins 
        infirmiers améliorées sans framework avec python-tkinter, MySQL, SSH, SCP en LAN.
      </p>
      <p className={styles.p}>
        A présent, j'utilise principalement React (Vite, NextJS) avec TypeScript.
      </p>
    </div>
  )
}
export default FirstArticle