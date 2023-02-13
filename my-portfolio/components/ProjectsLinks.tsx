import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { myprojects } from "../data/myprojects"
import { TbBrandNextjs } from 'react-icons/tb'
import { GrReactjs } from 'react-icons/gr'
import { FaPython } from 'react-icons/fa'
import { SiPhp } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiVite } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import styles from '@/styles/Projects.module.scss'

interface MyProjectsItemsProps {
  id: number | null
  name: string
  url: string
}

interface MyProjectsProps extends Array<MyProjectsItemsProps>{}

const ProjectsLinks = () => {
  const router = useRouter() as any
  const [myprojectsCall] = useState<MyProjectsItemsProps[]>(myprojects)

  const handleBackToHome = () => {
    router.replace("/")
  }
  return (
    <div className={styles.subdivofprojects}>

      {myprojectsCall.map((myproject: any) => (
        <div 
          key={myproject.id} 
          className={styles.hollyitemslink}>

          <li className={styles.liprojects}>
            <a
              href={`${myproject.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkprojects}
            >
              <div className={styles.realignlogos}>
                {myproject.name}

                {myproject.id === 1 
                  ? <TbBrandNextjs
                    size={32}
                    style={{
                      marginTop: '-3px',
                      marginLeft: '10px',
                      color: "cyan",
                      opacity: 0.7,
                    }} /> 
                  : null
                }
                {myproject.id === 2 
                  ? <div><SiVite
                    size={32}
                    style={{
                      marginTop: '-5px',
                      marginLeft: '10px',
                      color: "cyan",
                      opacity: 0.7,
                    }} /> <SiMysql
                      size={34}
                      style={{
                        marginTop: '-5px',
                        marginLeft: '10px',
                        color: "cyan",
                        opacity: 0.7,
                      }}/> </div>
                  : null
                }
                {myproject.id === 3 
                  ? <div><GrReactjs
                    size={32}
                    style={{
                      marginTop: '-5px',
                      marginLeft: '10px',
                      color: "cyan",
                      opacity: 0.7,
                    }} /> <SiMongodb 
                    size={32}
                    style={{
                      marginTop: '-5px',
                      marginLeft: '0px',
                      color: "cyan",
                      opacity: 0.7,
                    }}/> </div>
                  : null
                }
                {myproject.id === 4 
                  ? <FaPython
                    size={32}
                    style={{
                      marginBottom: '5px',
                      marginLeft: '10px',
                      color: "cyan",
                      opacity: 0.7,
                    }} />
                  : null
                }
                {myproject.id === 5 
                  ? <div><FaPython
                    size={32}
                    style={{
                      marginTop: '-5px',
                      marginLeft: '10px',
                      color: "cyan",
                      opacity: 0.7,
                    }} /> <SiMysql
                    size={34}
                    style={{
                      marginTop: '-5px',
                      marginLeft: '10px',
                      color: "cyan",
                      opacity: 0.7,
                    }}/> </div> 
                  : null
                }
                {myproject.id === 6 
                  ? <div style={{width: "100px"}}><SiPhp
                    size={38}
                    style={{
                      marginTop: '-5px',
                      marginLeft: '10px',
                      color: "cyan",
                      opacity: 0.7,
                    }} /> <SiMysql
                      size={34}
                      style={{
                        marginTop: '-5px',
                        marginLeft: '10px',
                        color: "cyan",
                        opacity: 0.7,
                      }}/> </div> 
                  : null
                }
              </div>
            </a>
          </li>
        </div>
      ))}
    </div>
  )
}
export default ProjectsLinks