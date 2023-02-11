import Link from 'next/link'
import styles from '@/styles/About.module.scss'

interface boolStylesProps {
  boolStyles: boolean
}

const AboutFirstParagraph = ({ boolStyles }: boolStylesProps) => {
  
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
          <Link
            className={styles.link}
            href="https://github.com/TLRKiliann/server-PHP-MySQL">
            Premier site en HTML, CSS, PhP, MySQL avec server Apache2 
            raspberry (WAN) HTTPS
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            className={styles.link}
            href="https://github.com/TLRKiliann/apache2_conf_raspberry">
            Configuration https apache2-ssl
          </Link>
        </li>
      </div>
    </>
  )
}
export default AboutFirstParagraph