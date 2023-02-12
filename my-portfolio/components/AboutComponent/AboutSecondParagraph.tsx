import { handleChangeTransition } from '../../functions/handleChangeTransition'
import styles from '@/styles/About.module.scss'

interface boolStylesProps {
  boolStyles: boolean
}

const AboutSecondParagraph = ({ boolStyles }: boolStylesProps) => {
  
  const newFunction = handleChangeTransition({boolStyles})

  return (
    <>
      <div className={newFunction}>
        <li className={styles.li}>
          <a
            href="https://github.com/TLRKiliann/BMI"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            BMI (python3-tkinter)
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://github.com/TLRKiliann/phpython-server"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            phpython-server
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://www.youtube.com/watch?v=O70eptxwP3I"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            ICMP transmission between 3 VM (one router)
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://www.youtube.com/watch?v=zaWTRN0kmYw"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            Convert a VM to a router (Debian 10)
          </a>
        </li>
      </div>
    </>
  )
}
export default AboutSecondParagraph