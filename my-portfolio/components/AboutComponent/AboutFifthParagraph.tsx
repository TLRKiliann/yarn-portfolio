import { handleChangeTransition } from '../../functions/handleChangeTransition'
import styles from '@/styles/About.module.scss'

interface boolStylesProps {
  boolStyles: boolean
}

const AboutFifthParagraph = ({ boolStyles }: boolStylesProps) => {
  
  const newFunction = handleChangeTransition({boolStyles})

  return (
    <>
      <div 
        className={newFunction}
        style={{color: "rgba(255, 255, 255, 0.6)"}}
      >
        Actuellement en reconversion professionnelle, je souhaite
        faire de ma passion un métier et continuer de faire évoluer
        mes compétences avec des pros au sein d'une entreprise.
      </div>
    </>
  )
}
export default AboutFifthParagraph