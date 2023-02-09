import React, { useState } from 'react'
import Layout from "../../components/Layout"
import {useRouter} from 'next/router'
import Link from 'next/link'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Image from 'next/image'
import styles from '@/styles/About.module.scss'

const About:React.FC = () => {
  const router = useRouter() as any
  const [first, setFirst] = useState<boolean>(false)
  const [second, setSecond] = useState<boolean>(false)
  const [third, setThird] = useState<boolean>(false)
  const [four, setFour] = useState<boolean>(false)

  const handleBackToHome = () => {
    router.replace("/")
  }

  const handleFirst = () => {
    setFirst(first => !first)
  }

  const handleSecond = () => {
    setSecond(second => !second)
  }

  const handleThird = () => {
    setThird(third => !third)
  }

  const handleFour = () => {
    setFour(four => !four)
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
            width="1640"
            height="1200"
            alt="img about"
            className={styles.img}
          />
        </div>

        <h1 className={styles.mainheaderabout}>About Me</h1>

        <article className={styles.article}>
          
          <div className={styles.listabout}>

            {first === false ? (
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

          {first === true ? (
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

            {second === false ? (
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

          {second === true ? (
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
            </div>
            ) : null
          }

          <hr className={styles.hrabout}/>
          <br />
          
          <div className={styles.listabout}>

            {third === false ? (
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

          {third === true ? (
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

            {four === false ? (
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

          {four === true ? (
            <div className={styles.paragraphaboutfirst}>
              <li className={styles.li}>
                <Link className={styles.link} href="https://github.com/TLRKiliann/Contacts-React">
                  Phone contact with React (Contacts-React)
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href="https://github.com/TLRKiliann/typescript-e-commerce">
                  typescript-e-commerce
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href="https://github.com/TLRKiliann/mernstack-api">
                  mernstack-api (vite-react-typescript-mysql)
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
            <a className={styles.aboutclassa}>
              2023 
            </a>
          </div>
          <div className={styles.paragraphabout}>
            Actuellement en reconversion professionnelle, je souhaite faire de ma passion
            un métier et continuer de faire évoluer mes compétences avec des pros au sein
            d'une entreprise.
          </div>
          <hr className={styles.hrabout} style={{marginBottom: "0px"}} />
          <br />
        </article>

      </div>
    </Layout>
  )
}
export default About