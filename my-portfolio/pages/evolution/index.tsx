import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from "../../components/Layout"
import ButtonGoHome from "../../components/ButtonGoHome"
import styles from '@/styles/Evolution.module.scss'

const Evolution:React.FC = () => {
  return (
    <Layout>

      <Head>
        <title>Evolution</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.evolution}>

        <h1 className={styles.evolutionmaintitle}>Evolution</h1>

        <ButtonGoHome />

        <div className={styles.mainclassvideo}>
          <video 
            width="100%"
            height="100%"
            autoPlay 
            muted 
            loop 
            className={styles.divvideointro}>
            <source src={"./videos/abstract.mp4"} type="video/mp4"/>
          </video>
        </div>

        <div className={styles.articlecontainer}>

          <div className={styles.article}>
            <h2 className={styles.h2}>Story</h2>
            <p className={styles.p}>
              Mon premier ordinateur était un mac book G3. Seulement, l'information
              n'était pas aussi accessible qu'aujourd'hui. Je me souviens encore des
              pages internet sans mise en forme ni couleurs. J'étais très frustré de
              ne pas comprendre comment fonctionnait mon ordinateur de l'époque.
            </p>
          </div>
          <div className={styles.article2}>
            <h2 className={styles.h2}>Motivation</h2>
            <p className={styles.p}>
              Au fil du temps, j'ai vu ma motivation croître pour l'informatique,
              raison pour laquelle, je souhaiterais faire de ma passion un métier.
            </p>
            <p className={styles.p}>
              J'aime comprendre le fonctionnement des applications, des SI et des 
              communcations internet.
            </p>
          </div>
        </div>

        <div className={styles.articlecontainer}>
          <div className={styles.article3}>
            <h2 className={styles.h2}>Personnalité</h2>
            <p className={styles.p}>
              Je suis quelqu'un de rigoureux, structuré et curieux. J'aime me tenir 
              informé sur les nouvelles technologies, celles qui sont les meilleures 
              ainsi que sur les bonnes pratiques.
            </p>
            <p className={styles.p}>
              La sécurité occupe également une place importante, surtout au jour
              d'aujourd'hui.
            </p>
          </div>
          
          <div className={styles.article4}>
            
            <div className={styles.imgevolution}>
              <Image
                src={'/images/super.png'}
                width="1920"
                height="1280"
                alt="img about"
                className={styles.img}
              />
            </div>

            <h2 className={styles.h2}>Skills</h2>
            <p style={{fontSize: "1.4rem", color: 'dodgerblue'}}>
              Click !
            </p>
            <div className={styles.lilink}>
              <li className={styles.li}>
                <Link href="/skills" className={styles.link}>
                  Soft Skills
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/skills" className={styles.link}>
                  Hard Skills
                </Link>
              </li>
            </div>
          
          </div>
        </div>

        <div className={styles.articlecontainer}>
          <div className={styles.article5}>
            <h2 className={styles.h2}>Objectifs</h2>
            <p className={styles.p}>
              Devenir un excellent développeur et travailler avec des pros serait
              pour moi l'idéal. Plusieurs cerveaux valent toujours mieux qu'un ! 
              Aussi, je pense que pour construire et s'enrichir il faut être plusieurs.
            </p>
          </div>
          <div className={styles.article6}>
            <h2 className={styles.h2}>Valeurs</h2>
            <p className={styles.p}>
              Identifier l'origine du problème et faire des liens pour trouver des 
              solutions, est une valeur importante que l'on retrouve aussi dans les 
              soins. Je pense que c'est une valeur importante également en informatique. 
            </p>
            <p className={styles.p}>
              J'aime trouver des solutions et paramétrer les situations. Réfléchir 
              avant, pendant et après l'action. La remise en question et les remarques 
              sont pour moi essentiels pour s'amélioration et évoluer.
              J'aime apprendre découvrir des nouvelles choses.
              J'aime créer, innover et contribuer.
            </p>
          </div>
        </div>

      </div>

    </Layout>
  )
}
export default Evolution