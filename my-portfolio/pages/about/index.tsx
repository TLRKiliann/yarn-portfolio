import { useState } from 'react'
import Image from 'next/image'
import Layout from "../../components/Layout"
import ButtonGoHome from "../../components/ButtonGoHome"
import AboutFirstParagraph from "../../components/AboutComponent/AboutFirstParagraph"
import AboutSecondParagraph from "../../components/AboutComponent/AboutSecondParagraph"
import AboutThirdParagraph from "../../components/AboutComponent/AboutThirdParagraph"
import AboutFourthParagraph from "../../components/AboutComponent/AboutFourthParagraph"
import AboutFifthParagraph from "../../components/AboutComponent/AboutFifthParagraph"
import BtnArrow from "../../components/AboutComponent/BtnArrow"
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import styles from '@/styles/About.module.scss'

const About:React.FC = () => {

  const [first, setFirst] = useState<boolean>(true)
  const [second, setSecond] = useState<boolean>(true)
  const [third, setThird] = useState<boolean>(true)
  const [four, setFour] = useState<boolean>(true)
  const [five, setFive] = useState<boolean>(true)

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

  const handleFive = () => {
    setFive(five => !five)
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

            {first === false ? (
              <BtnArrow boolChange={first} handleChangeFunc={handleFirst} />
              ) : (
              <BtnArrow boolChange={first} handleChangeFunc={handleFirst} />
              )
            }

            <a className={styles.aboutclassa}>
              2017-2018
            </a>
          </div>

          {first === true ? (
            <AboutFirstParagraph boolStyles={first}/>
            ) : (
            <AboutFirstParagraph boolStyles={first}/>
            )
          }


          <hr className={styles.hrabout}/>
          <br />

          <div className={styles.listabout}>

            {second === false ? (
              <BtnArrow boolChange={second} handleChangeFunc={handleSecond} />
              ) : (
              <BtnArrow boolChange={second} handleChangeFunc={handleSecond} />
              )
            }

            <a className={styles.aboutclassa}>
              2019-2020
            </a>
          </div>

          {second === true ? (
            <AboutSecondParagraph boolStyles={second} />
            ) : (
            <AboutSecondParagraph boolStyles={second} />
            )
          }

          <hr className={styles.hrabout}/>
          <br />
          
          <div className={styles.listabout}>

            {third === false ? (
              <BtnArrow boolChange={third} handleChangeFunc={handleThird} />
              ) : (
              <BtnArrow boolChange={third} handleChangeFunc={handleThird} />
              )
            }

            <a className={styles.aboutclassa}>
              2020-2021
            </a>
          </div>

          {third === true ? (
            <AboutThirdParagraph boolStyles={third} />
            ) : (
            <AboutThirdParagraph boolStyles={third} />
            )
          }


          <hr className={styles.hrabout}/>
          <br />
          
          <div className={styles.listabout}>

            {four === false ? (
              <BtnArrow boolChange={four} handleChangeFunc={handleFour} />
              ) : (
              <BtnArrow boolChange={four} handleChangeFunc={handleFour} />
              )
            }

            <a className={styles.aboutclassa}>
              2021-2023
            </a>
          </div>

          {four === true ? (
            <AboutFourthParagraph boolStyles={four} />
            ) : (
            <AboutFourthParagraph boolStyles={four} />
            )
          }

          <hr className={styles.hrabout}/>
          <br />
          
          <div className={styles.listabout}>

            {five === false ? (
              <BtnArrow boolChange={five} handleChangeFunc={handleFive} />
              ) : (
              <BtnArrow boolChange={five} handleChangeFunc={handleFive} />
              )
            }

            <a className={styles.aboutclassa}>
              2023 
            </a>
          </div>
          
          {five === true ? (
            <AboutFifthParagraph boolStyles={five} />
            ) : (
            <AboutFifthParagraph boolStyles={five} />
            )
          }

          <hr
            className={styles.hrabout}
            style={{marginBottom: "0px"}} />
          <br />
        </article>

      </div>
    </Layout>
  )
}
export default About