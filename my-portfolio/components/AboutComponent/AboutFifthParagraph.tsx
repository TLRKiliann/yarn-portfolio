import Link from 'next/link'
import styles from '@/styles/About.module.scss'

interface boolStylesProps {
  boolStyles: boolean
}

const AboutFifthParagraph = ({ boolStyles }: boolStylesProps) => {
  
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
        Actuellement en reconversion professionnelle, je souhaite faire de ma passion
        un métier et continuer de faire évoluer mes compétences avec des pros au sein
        d'une entreprise.
      </div>
    </>
  )
}
export default AboutFifthParagraph