import styles from '@/styles/About.module.scss'

interface boolStylesProps {
  boolStyles: boolean
}

const AboutThirdParagraph = ({ boolStyles }: boolStylesProps) => {
  
  const handleChangeTransition = () => {
    if (boolStyles === true) {
      return `${styles.paragraphaboutfirst}`
    } else {
      return `${styles.paragraphaboutrevert}`
    }
  }

  return (
    <>
      <div className={handleChangeTransition()}>
        <li className={styles.li}>
          <a 
            href="https://github.com/TLRKiliann/tor-proxy"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            tor proxy on linux and raspberry pi 400
          </a>
        </li>
        <li className={styles.li}>
          <a 
            href="https://github.com/TLRKiliann/anxious_scale"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            anxious_scale (stand-alone) échelle d'évaluation des angoisse (psychatrie)
          </a>
        </li>
        <li className={styles.li}>
          <a 
            href="https://github.com/TLRKiliann/psychotabs"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            psychotabs (stand-alone)
          </a>
        </li>
        <li className={styles.li}>
          <a 
            href="https://github.com/TLRKiliann/interactions"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            interactions python3-tkinter (stand-alone)
          </a>
        </li>
        <li className={styles.li}>
          <a 
            href="https://github.com/TLRKiliann/timetrack"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            timetrack (application soins infirmiers) python3-tkinter ssh
            scp mysql
          </a>
        </li>
      </div>
    </>
  )
}
export default AboutThirdParagraph