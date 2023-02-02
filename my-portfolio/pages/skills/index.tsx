import React from 'react'
import {useRouter} from 'next/router'
import { useState } from "react"
import styles from '@/styles/Skills.module.scss'

const Skills:React.FC = () => {
  const [switchBtn, setSwitchBtn] = useState<boolean>(false)
  const router = useRouter() as any
  
  const handleBackToHome = () => {
    router.replace("/")
  }

  const handleClickBtn = () => {
    console.log("clicked")
    setSwitchBtn(!switchBtn)
  }

  return (
    <div>
      <div className={styles.bgcolor}>
          
        <div className={styles.divbtn}>
          <button
            type='button'
            onClick={handleBackToHome}
            className={styles.btntopright}
          >
            Back to Home
          </button>
        </div>

        <div className={styles.mainclassvideo}>
          <video 
            width="100%"
            height="100%"
            autoPlay 
            muted 
            loop 
            className={styles.divvideointro}>
            <source src={"./videos/lightning.mp4"} type="video/mp4"/>
          </video>
        </div>

        <h1 className={styles.mainheaderskills}>Skills</h1>

        {!switchBtn ? (
          <div>
            <div className={styles.sectionone}>
            
              <button type='button'
                onClick={handleClickBtn}
                className={styles.btnhard}
              >
                Soft Skills
              </button>

              <h2 className={styles.secondtitle}>
                Hard Skills
              </h2>

              <div className={styles.mainblocdiv}>

                <div className={styles.subblockdiv}>
                  <h2 className={styles.h2titlesubblock}>
                    Code :
                  </h2>

                  <div className={styles.blocli}>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Python3
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        HTML
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        JavaScript
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        TypeScript
                      </a>
                    </li>
                  </div>
                </div>

                <div className={styles.subblockdiv}>
                  <h2 className={styles.h2titlesubblock}>
                    Styles :
                  </h2>

                  <div className={styles.blocli}>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        CSS
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Sass
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Bootstrap
                      </a>
                    </li>

                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Tailwind (-)
                      </a>
                    </li>

                  </div>
                </div>

                <div className={styles.subblockdiv}>
                  <h2 className={styles.h2titlesubblock}>
                    Database :
                  </h2>

                  <div className={styles.blocli}>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        MySQL
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Mongoose
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Json-server
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        API REST + RESTFull
                      </a>
                    </li>
                  </div>
                </div>

                <div className={styles.subblockdiv}>
                  <h2 className={styles.h2titlesubblock}>
                    Framework :
                  </h2>

                  <div className={styles.blocli}>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        React
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Vite
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Next.js
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Angular (-)
                      </a>
                    </li>
                  </div>
                </div>

                <div className={styles.subblockdiv}>
                  <h2 className={styles.h2titlesubblock}>
                    Testing :
                  </h2>

                  <div className={styles.blocli}>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        React testing library
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Jest
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Vitest
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Cypress
                      </a>
                    </li>
                  </div>
                </div>

                <div className={styles.subblockdiv}>
                  <h2 className={styles.h2titlesubblock}>
                    Security :
                  </h2>

                  <div className={styles.blocli}>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Attestation ANSSI
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Kalilinux
                      </a>
                    </li>
                    <li className={styles.listhard}>
                      <a className={styles.classa}>
                        Les bonnes pratiques
                      </a>
                    </li>
                  </div>
                </div>

              </div>
            </div>
          </div>

          ) : (

          <div className={styles.sectiontwo}>
            
            <button type='button'
              onClick={handleClickBtn}
              className={styles.btnsoft}
            >
              Hard Skills
            </button>

            <h2 className={styles.secondtitle}>
              Softs Skills
            </h2>

            <div style={{marginLeft: "0px"}}>
              <div className={styles.divlist}>
                <li className={styles.listsoft}>
                  <a className={styles.linka}>
                    Esprit d'analyse.
                  </a>
                </li>
              </div>
              <div className={styles.divlist}>
                <li className={styles.listsoft}>
                  <a className={styles.linka}>
                    Esprit de conceptualisation.
                  </a>
                </li>
              </div>
              <div className={styles.divlist}>
                <li className={styles.listsoft}>
                  <a className={styles.linka}>
                    Sensible à la sécurité des SI.
                  </a>
                </li>
              </div>
              <div className={styles.divlist}>
                <li className={styles.listsoft}>
                  <a className={styles.linka}>
                    Capacité à se remettre en question.
                  </a>
                </li>
              </div>
              <div className={styles.divlist}>
                <li className={styles.listsoft}>
                  <a className={styles.linka}>
                    Sens de l'organisation.
                  </a>
                </li>
              </div>
              <div className={styles.divlist}>
                <li className={styles.listsoft}>
                  <a className={styles.linka}>
                    Personnalité calme et empathique.
                  </a>
                </li>
              </div>
            </div>

          </div>

          )
        }

      </div>
    </div>
  )
}
export default Skills