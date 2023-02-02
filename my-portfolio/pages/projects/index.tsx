import React, { useState, useEffect } from 'react'
import Layout from "../../components/Layout"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { TbBrandNextjs } from 'react-icons/tb'
import { GrReactjs } from 'react-icons/gr'
import { FaPython } from 'react-icons/fa'
import { SiPhp } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiVite } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import styles from '@/styles/Projects.module.scss'

type MyProjectsProps = {
  id: number
  myprojects: {
    map: any
    find: any
    id: number
    name: string
    url: string
  }
}

const Projects:React.FC = () => {
  const [myprojects, setMyProjects] = useState<MyProjectsProps[]>([])
  const router = useRouter() as any

  useEffect(() => {
    const handleProjects = async () => {
      const response = await fetch("/api/myprojects")
      const data: MyProjectsProps[] = await response.json()
      setMyProjects(data)
    }
    handleProjects()
    return () => console.log("useEffect clean-up !")
  }, [])

  const handleBackToHome = () => {
    router.replace("/")
  }

  return (
    <Layout>      
      <div className={styles.bgcolorproject}>

        <div className={styles.maindivvideoprojects}>
          <video 
            autoPlay 
            muted 
            loop 
            className={styles.divvideoproject}>
            <source src={"./videos/wave-beam.mp4"} type="video/mp4"/>
          </video>
        </div>

        <div className={styles.divbtn}>
          <button
            type='button'
            onClick={handleBackToHome}
            className={styles.btntopright}
          >
            Back to Home
          </button>
        </div>

        <h1 className={styles.mainheaderprojetcs}>My Projects</h1>

        <div className={styles.maindivofprojects}>
        
          <h2 className={styles.h2}>Quelques liens GitHub</h2>

          <hr className={styles.hr} />

            <div className={styles.subdivofprojects}>

              {myprojects.map((myproject: any) => (
                <li key={myproject.id} className={styles.liprojects}>
                  <Link
                    target="_blank"
                    href={`${myproject.url}`}
                    rel="noopener noreferrer"
                    className={styles.linkprojects}
                  >
                    <div className={styles.realignlogos}>
                      {myproject.name}

                      {myproject.id === 1 
                      ? <TbBrandNextjs
                          size={32}
                          style={{
                            marginBottom: '-7px',
                            marginLeft: '10px',
                            color: "cyan",
                            opacity: 0.5,

                        }} /> 
                        : null
                      }
                      {myproject.id === 2 
                        ? <SiVite
                          size={32}
                          style={{
                            marginBottom: '-7px',
                            marginLeft: '10px',
                            color: "cyan",
                            opacity: 0.5,
                          }} />
                        : null
                      }
                      {myproject.id === 3 
                        ? <div><GrReactjs
                          size={32}
                          style={{
                            marginBottom: '-7px',
                            marginLeft: '10px',
                            color: "cyan",
                            opacity: 0.5,
                          }} /> <SiMongodb 
                          size={32}
                          style={{
                            marginBottom: '-6px',
                            marginLeft: '0px',
                            color: "cyan",
                            opacity: 0.5,                      
                          }}/> </div>
                        : null
                      }
                      {myproject.id === 4 
                        ? <FaPython
                          size={32}
                          style={{
                            marginBottom: '-7px',
                            marginLeft: '10px',
                            color: "cyan",
                            opacity: 0.5,
                          }} />
                        : null
                      }
                      {myproject.id === 5 
                        ? <div><FaPython
                          size={32}
                          style={{
                            marginBottom: '-7px',
                            marginLeft: '10px',
                            color: "cyan",
                            opacity: 0.5,
                          }} /> <SiMysql
                          size={32}
                          style={{
                            marginBottom: '-7px',
                            marginLeft: '10px',
                            color: "cyan",
                            opacity: 0.5,                      
                          }}/> </div> 
                        : null
                      }
                      {myproject.id === 6 
                        ? <div style={{width: "100px"}}><SiPhp
                          size={38}
                          style={{
                            marginBottom: '-2px',
                            marginLeft: '10px',
                            color: "cyan",
                            opacity: 0.5,
                          }} /> <SiMysql
                            size={32}
                            style={{
                              marginBottom: '2px',
                              marginLeft: '10px',
                              color: "cyan",
                              opacity: 0.5,                      
                            }}/> </div> 
                        : null
                      }
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          <hr className={styles.hr2} />
        </div>
      </div>
    </Layout>
  )
}
export default Projects