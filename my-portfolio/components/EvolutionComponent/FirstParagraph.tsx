import { handleChangeTransition } from '../../functions/handleChangeTransition'
import styles from '@/styles/Evolution.module.scss'

interface boolStylesProps {
  boolStyles: boolean
}

const FirstParagraph = ({ boolStyles }: boolStylesProps) => {

  const newFunction = handleChangeTransition({boolStyles})

  return (
    <>
      <div className={newFunction}>
        <li className={styles.li}>
          <a
            href="https://github.com/TLRKiliann/server-PHP-MySQL"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            Premier site en HTML, CSS, PhP, MySQL avec server Apache2 
            raspberry (WAN) HTTPS
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://github.com/TLRKiliann/apache2_conf_raspberry"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            Configuration https apache2-ssl
          </a>
        </li>
      </div>
    </>
  )
}
export default FirstParagraph