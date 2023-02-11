import Link from 'next/link'
import styles from '@/styles/About.module.scss'

interface boolStylesProps {
  boolStyles: boolean
}

const AboutFourthParagraph = ({ boolStyles }: boolStylesProps) => {
  
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
          <Link className={styles.link} href="https://github.com/TLRKiliann/Contacts-React">
            Phone contact with React (Contacts-React)
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="https://github.com/TLRKiliann/typescript-e-commerce">
            site e-commerce avec typescript
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="https://github.com/TLRKiliann/mernstack-api">
            mernstack-api (vite-react-typescript-mysql)
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="https://www.youtube.com/watch?v=8g789tQ2gyY">
            site de boulangerie
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="https://www.youtube.com/watch?v=ggG2bOggCZU">
            Vite-React-TS-Tailwind & Sass
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="https://www.youtube.com/watch?v=sdoP_y_PftQ">
            Advanced chat-app (vite react ts scss mariadb) in LAN
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="https://github.com/TLRKiliann/nextjs-api">
            Next.js api
          </Link>
        </li>
      </div>
    </>
  )
}
export default AboutFourthParagraph