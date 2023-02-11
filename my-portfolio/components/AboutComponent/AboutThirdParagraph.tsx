import Link from 'next/link'
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
          <Link className={styles.link} href="https://github.com/TLRKiliann/tor-proxy">
            tor proxy on linux and raspberry pi 400
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="https://github.com/TLRKiliann/anxious_scale">
            anxious_scale (stand-alone) échelle d'évaluation des angoisse (psychatrie)
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="https://github.com/TLRKiliann/psychotabs">
            psychotabs (stand-alone)
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="https://github.com/TLRKiliann/interactions">
            interactions python3-tkinter (stand-alone)
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="https://github.com/TLRKiliann/timetrack">
            timetrack (application soins infirmiers) python3-tkinter ssh
            scp mysql
          </Link>
        </li>
      </div>
    </>
  )
}
export default AboutThirdParagraph