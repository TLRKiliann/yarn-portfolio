import Link from 'next/link'
import styles from '@/styles/About.module.scss'

interface boolStylesProps {
  boolStyles: boolean
}

const AboutSecondParagraph = ({ boolStyles }: boolStylesProps) => {
  
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
          <Link className={styles.link} href="https://github.com/TLRKiliann/BMI">
            BMI (python3-tkinter)
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="https://github.com/TLRKiliann/phpython-server">
            phpython-server
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="https://www.youtube.com/watch?v=O70eptxwP3I">
            ICMP transmission between 3 VM (one router)
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="https://www.youtube.com/watch?v=zaWTRN0kmYw">
            Convert a VM to a router (Debian 10)
          </Link>
        </li>
      </div>
    </>
  )
}
export default AboutSecondParagraph