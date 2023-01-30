import React from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import styles from '@/styles/About.module.scss'

const About:React.FC = () => {

  const router = useRouter() as any
  
  const handleBackToHome = () => {
    router.replace("/")
  }

  return (
    <>
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
            <a className={styles.aboutclassa}>Premier défi !
            </a>
          </li>
          <p className={styles.paragraphabout}>
            Mon premier défi a été de monter mon pc pour pouvoir jouer à un MMO-RPG.
            Après plusieurs heures de jeux, j'ai voulu comprendre le fonctionnement
            de mon ordinateur. Pour ce faire je suis passé de Windows 10 à Linux.
          </p>
          <hr className={styles.hrabout}/>
          <br />
          <li className={styles.listabout}>
            <a className={styles.aboutclassa}>Mon premier exploit !
            </a>
          </li>
          <p className={styles.paragraphabout}>
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
            amusant de faire mes propres packet internet avec Scapy ou d'observer leur
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
          </p>
          <hr className={styles.hrabout}/>
          <br />
          <li className={styles.listabout}>
            <a className={styles.aboutclassa}>JavaScript
            </a>
          </li>
          <p className={styles.paragraphabout}>
            J'ai également appris quelques framework tels que React, Vite, NextJs,
            pour faire des applications/sites web en JavaScript avec TypeScript et
            apprendre comment utiliser les divers style systems.
          </p>
          <hr className={styles.hrabout}/>
          <br />
          <li className={styles.listabout}>
            <a className={styles.aboutclassa}>Et la suite... 
            </a>
          </li>
          <p className={styles.paragraphabout}>
            Actuellement en reconversion professionnelle, je souhaite faire de ma passion
            un métier et continuer d'augmenter mes compétences avec des pros au sein d'une
            entreprise.
          </p>
          <hr className={styles.hrabout}/>
          <br />
        </article>

      </div>
    </>
  )
}
export default About