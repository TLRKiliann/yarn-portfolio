import { handleChangeTransition } from '../../functions/handleChangeTransition'
import styles from '@/styles/About.module.scss'

interface boolStylesProps {
  boolStyles: boolean
}

const AboutFourthParagraph = ({ boolStyles }: boolStylesProps) => {
  
  const newFunction = handleChangeTransition({boolStyles})

  return (
    <>
      <div className={newFunction}>
        <li className={styles.li}>
          <a
            href="https://github.com/TLRKiliann/Contacts-React"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            Phone contact with React (Contacts-React)
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://github.com/TLRKiliann/typescript-e-commerce"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            site e-commerce avec typescript
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://github.com/TLRKiliann/mernstack-api"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            mernstack-api (vite-react-typescript-mysql)
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://www.youtube.com/watch?v=8g789tQ2gyY"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            site de boulangerie
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://www.youtube.com/watch?v=ggG2bOggCZU"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            Vite-React-TS-Tailwind & Sass
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://www.youtube.com/watch?v=sdoP_y_PftQ"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            Advanced chat-app (vite react ts scss mariadb) in LAN
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://github.com/TLRKiliann/nextjs-api"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            Next.js api
          </a>
        </li>
      </div>
    </>
  )
}
export default AboutFourthParagraph