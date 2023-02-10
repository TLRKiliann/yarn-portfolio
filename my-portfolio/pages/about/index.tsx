import React, { useState } from 'react'
import Layout from "../../components/Layout"
import ButtonGoHome from "../../components/ButtonGoHome"
import Link from 'next/link'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Image from 'next/image'
import styles from '@/styles/About.module.scss'

type transitionTxtProps = {
  first: boolean
  second: boolean
  third: boolean
  four: boolean
  five: boolean
}

const About:React.FC = () => {

  const [transitionTxt, setTransitionTxt] = useState<transitionTxtProps>({
    first: false,
    second: false,
    third: false,
    four: false,
    five: false
  })

  const handleFirst = () => {
    setTransitionTxt({...transitionTxt, first: !transitionTxt.first})
  }

  const handleSecond = () => {
    setTransitionTxt({...transitionTxt, second: !transitionTxt.second})
  }

  const handleThird = () => {
    setTransitionTxt({...transitionTxt, third: !transitionTxt.third})
  }

  const handleFour = () => {
    setTransitionTxt({...transitionTxt, four: !transitionTxt.four})
  }

  const handleFive = () => {
    setTransitionTxt({...transitionTxt, five: !transitionTxt.five})
  }

  return (
    <Layout>
      <div className={styles.bgcolorabout}>

        <ButtonGoHome />

        <div className={styles.imgabout}>
          <Image
            src={'/coolnection.jpg'}
            width="1680"
            height="1200"
            alt="img about"
            className={styles.img}
          />
        </div>

        <h1 className={styles.mainheaderabout}>About Me</h1>

        <article className={styles.article}>
          
          <div className={styles.listabout}>

            {transitionTxt.first === false ? (
              <button type='button' onClick={handleFirst} className={styles.button}>
                <BsFillArrowRightCircleFill className={styles.logoreact} size={24}/>
              </button>
              ) : (
              <button type='button' onClick={handleFirst} className={styles.button}>
                <BsFillArrowRightCircleFill className={styles.rotationlogo} size={24}/>
              </button>
              )
            }
            <a className={styles.aboutclassa}>
              2017-2018
            </a>
          </div>

          {transitionTxt.first === true ? (
            <div className={styles.paragraphaboutfirst}>
              <li className={styles.li}>
                <Link className={styles.link} href="https://github.com/TLRKiliann/server-PHP-MySQL">
                  Premier site en HTML, CSS, PhP, MySQL avec server Apache2 
                  raspberry (WAN) HTTPS
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href="https://github.com/TLRKiliann/apache2_conf_raspberry">
                  Configuration https apache2-ssl
                </Link>
              </li>
            </div>
            ) : null
          }

          <hr className={styles.hrabout}/>
          <br />

          <div className={styles.listabout}>

            {transitionTxt.second === false ? (
              <button type='button' onClick={handleSecond} className={styles.button}>
                <BsFillArrowRightCircleFill className={styles.logoreact} size={24}/>
              </button>
              ) : (
              <button type='button' onClick={handleSecond} className={styles.button}>
                <BsFillArrowRightCircleFill className={styles.rotationlogo} size={24}/>
              </button>
              )
            }

            <a className={styles.aboutclassa}>
              2019-2020
            </a>
          </div>

          {transitionTxt.second === true ? (
            <div className={styles.paragraphaboutfirst}>
              <li className={styles.li}>
                <Link className={styles.link} href="https://github.com/TLRKiliann/BMI">
                  BMI (python3-tkinter)
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href="https://github.com/TLRKiliann/phpython-server">
                  phpython-server
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href="https://www.youtube.com/watch?v=O70eptxwP3I">
                  ICMP transmission between 3 VM (one router)
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href="https://www.youtube.com/watch?v=zaWTRN0kmYw">
                  Convert a VM to a router (Debian 10)
                </Link>
              </li>
            </div>
            ) : null
          }

          <hr className={styles.hrabout}/>
          <br />
          
          <div className={styles.listabout}>

            {transitionTxt.third === false ? (
              <button type='button' onClick={handleThird} className={styles.button}>
                <BsFillArrowRightCircleFill className={styles.logoreact} size={24}/>
              </button>
              ) : (
              <button type='button' onClick={handleThird} className={styles.button}>
                <BsFillArrowRightCircleFill className={styles.rotationlogo} size={24}/>
              </button>
              )
            }

            <a className={styles.aboutclassa}>
              2020-2021
            </a>
          </div>

          {transitionTxt.third === true ? (
            <div className={styles.paragraphaboutfirst}>
              <li className={styles.li}>
                <Link className={styles.link} href="https://github.com/TLRKiliann/tor-proxy">
                  tor proxy on linux and raspberry pi 400
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href="https://github.com/TLRKiliann/anxious_scale">
                  anxious_scale (stand-alone) échelle d'évaluation des angoisse (psychatrie)
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href="https://github.com/TLRKiliann/psychotabs">
                  psychotabs (stand-alone)
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href="https://github.com/TLRKiliann/interactions">
                  interactions python3-tkinter (stand-alone)
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href="https://github.com/TLRKiliann/timetrack">
                  timetrack (application soins infirmiers) python3-tkinter ssh
                  scp mysql
                </Link>
              </li>
            </div>
            ) : null
          }

          <hr className={styles.hrabout}/>
          <br />
          
          <div className={styles.listabout}>

            {transitionTxt.four === false ? (
              <button type='button' onClick={handleFour} className={styles.button}>
                <BsFillArrowRightCircleFill className={styles.logoreact} size={24}/>
              </button>
              ) : (
              <button type='button' onClick={handleFour} className={styles.button}>
                <BsFillArrowRightCircleFill className={styles.rotationlogo} size={24}/>
              </button>
              )
            }

            <a className={styles.aboutclassa}>
              2021-2023
            </a>
          </div>

          {transitionTxt.four === true ? (
            <div className={styles.paragraphaboutfirst}>
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
            ) : null
          }

          <hr className={styles.hrabout}/>
          <br />
          
          <div className={styles.listabout}>

            {transitionTxt.five === false ? (
              <button type='button' onClick={handleFive} className={styles.button}>
                <BsFillArrowRightCircleFill className={styles.logoreact} size={24}/>
              </button>
              ) : (
              <button type='button' onClick={handleFive} className={styles.button}>
                <BsFillArrowRightCircleFill className={styles.rotationlogo} size={24}/>
              </button>
              )
            }

            <a className={styles.aboutclassa}>
              2023 
            </a>
          </div>
          
          {transitionTxt.five === true ? (
            <div className={styles.paragraphaboutfirst}>
              Actuellement en reconversion professionnelle, je souhaite faire de ma passion
              un métier et continuer de faire évoluer mes compétences avec des pros au sein
              d'une entreprise.
            </div>
            ) : null
          }

          <hr className={styles.hrabout} style={{marginBottom: "0px"}} />
          <br />
        </article>

      </div>
    </Layout>
  )
}
export default About