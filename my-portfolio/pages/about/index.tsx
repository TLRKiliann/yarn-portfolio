import React from 'react'
import Layout from "../../components/Layout"
import {useRouter} from 'next/router'
import Image from 'next/image'
import styles from '@/styles/About.module.scss'

const About:React.FC = () => {

  const router = useRouter() as any

  const handleBackToHome = () => {
    router.replace("/")
  }

  return (
    <Layout>
      <div className={styles.bgcolorabout}>
        <div className={styles.divbtn}>
          <button
            type='button'
            onClick={handleBackToHome}
            className={styles.btntopright}
          >
            Back to Home
          </button>
        </div>

        <div className={styles.imgabout}>
          <Image
            src={'/coolnection.jpg'}
            width="1900"
            height="1200"
            alt="img about" />
        </div>

        <h1 className={styles.mainheaderabout}>About Me</h1>
        <article className={styles.article}>

          <li className={styles.listabout}>
            <a className={styles.aboutclassa}>Premier défi, premier exploit !
            </a>
          </li>
          <p className={styles.paragraphabout}>
            Mon premier défi a été de monter mon pc pour pouvoir jouer à un MMO-RPG.
            Après plusieurs heures de jeux, j'ai voulu comprendre le fonctionnement
            de mon ordinateur. Pour ce faire je suis passé de Windows 10 à Linux.
            Ensuite, je me suis demandé comment interagir avec des SI. Pour cela, j'ai 
            compris qu'il me fallait apprendre le code. A partir de ce moment-là, 
            j'ai appris HTML, CSS, PhP, MySQL. J'ai transformé mon raspberry en serveur, 
            grâce à Apache2 afin de rendre mon site accessible en WAN avec HTTPS.
          </p>
          <hr className={styles.hrabout}/>
          <br />
          <li className={styles.listabout}>
            <a className={styles.aboutclassa}>Sécurité des SI et réseaux internet
            </a>
          </li>
          <p className={styles.paragraphabout}>
            Je me suis également intéressé aux réseaux internet. J'ai donc suivi des 
            cours sur openclassroom. La création de machines virtuelles avec réseaux 
            virtuels sur Virtualbox m'a permis de mieux comprendre le fonctionnement des 
            réseaux. J'ai également une expérience avec Kalilinux sur rootme et hackthebox 
            pour me faire une meilleure représentation de la sécurité. Aussi, j'ai trouvé 
            amusant de faire mes propres packet internet avec Scapy et d'observer leur
            contenu avec TCPdump (wireshark), comment déchiffrer un mot de passe, etc.
          </p>
          <hr className={styles.hrabout}/>
          <br />
          <li className={styles.listabout}>
            <a className={styles.aboutclassa}>Web App sans framework
            </a>
          </li>
          <p className={styles.paragraphabout}>
            J'ai également voulu faire une Web App sans framework avec python3 et tkinter.
            L'idée était de faire une application améliorée pour le personnel soignant qui
            incorpore des alarmes, agenda, rappel des dates d'arrêt des posologies
            médicamenteuses, signes vitaux, tableau récapitulatifs des maladies 
            transmissbiles, allergies, etc.
          <br />
            La réalisation de ce projet, c'est faite grace à une base de données MySQL, et à une connexion SSH 
            sur Raspberry pi 3b (configuration du firewall serveur-client avec clefs asymétriques et SCP pour
            SSH).  
          </p>
          <hr className={styles.hrabout}/>
          <br />
          <li className={styles.listabout}>
            <a className={styles.aboutclassa}>JavaScript
            </a>
          </li>
          <p className={styles.paragraphabout}>
            J'ai également appris quelques framework tels que React, Vite, Next.js,
            pour faire des applications/sites web en JavaScript avec TypeScript et
            apprendre comment utiliser les divers style systems.
          <br />
            Ces notions m'ont permis de faire des applications e-commerce, chat avec base de données
            MySQL, des API avec openWeathermap.com, typicode.com.
          </p>
          <hr className={styles.hrabout}/>
          <br />
          <li className={styles.listabout}>
            <a className={styles.aboutclassa}>Et la suite... 
            </a>
          </li>
          <p className={styles.paragraphabout}>
            Actuellement en reconversion professionnelle, je souhaite faire de ma passion
            un métier et continuer de faire évoluer mes compétences avec des pros au sein d'une
            entreprise.
          </p>
          <hr className={styles.hrabout} style={{marginBottom: "0px"}} />
          <br />
        </article>
      </div>
    </Layout>
  )
}
export default About