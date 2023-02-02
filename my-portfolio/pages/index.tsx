import React, { useState, useEffect } from 'react'
import Layout from "../components/Layout"
import Head from 'next/head'
import Link from 'next/link'
import { GiKoala } from 'react-icons/gi'
import styles from '@/styles/Home.module.scss'

type MyurlsProps = {
  myurls: {
    map: any
    id: number | null
    name: string
    url: string
  }
}

const Home:React.FC = () => {
  const [myurls, setMyUrls] = useState<MyurlsProps[]>([])
  //console.log(myurls, "it is myurls")
  useEffect(() => {
    const handleComments = async () => {
      const response = await fetch("/api/myurls")
      const data: MyurlsProps[] = await response.json()
      setMyUrls(data)
    }
    handleComments()
    return () => console.log("useEffect clean-up !")
  }, [])

  return (
    <Layout>
      <Head>
        <title>Portfolio NextJS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <main className={styles.main}>
          
          <div className={styles.maindivanimation}>

            <div className={styles.firstdivanimation}>
              <div className={styles.subdivfirstanimation}>
                <h2>Wellcome to my portfolio !</h2>
              </div>
            </div>

            <div className={styles.seconddivanimation}>
              <div className={styles.subdivsecondanimation}>
                <h2>I'm a web developer.</h2>
              </div>
            </div>

            <div className={styles.thirddivanimation}>
              <div className={styles.subdivthirdanimation}>
                <h2>Enjoy this visit !</h2>
              </div>
            </div>
          </div>

          <div className={styles.divaudio}>
            <audio
              controls
              loop
              src="./drums.mp3"
              preload="auto"
              className={styles.audio}
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>

          <div className={styles.mainclassvideo}>
            <video
              autoPlay 
              muted 
              loop 
              className={styles.divvideointro}>
              <source src={"./videos/spider-web.mp4"} type="video/mp4"/>
            </video>
          </div>

          <h2 className={styles.mainheader}>Next.js Portfolio</h2>

          <div className={styles.lilink}>
            <li className={styles.list}>
              <Link href="/about" className={styles.link}>🌺 About Me&nbsp;</Link>
            </li>

            <li className={styles.list}>
              <Link href="/skills" className={styles.link}>🌺 My skills&nbsp;</Link>
            </li>
            <li className={styles.list}>
              <Link href="/projects" className={styles.link}>🌺 My projects&nbsp;</Link>
            </li>
            <li className={styles.list}>
              <Link href="/gallery" className={styles.link}>🌺 Gallery&nbsp;</Link>
            </li>
            <li className={styles.list}>
              <Link href="/contact" className={styles.link}>🌺 Contact&nbsp;</Link>
            </li>
          </div>

          <div className={styles.secondlilink}>
            {myurls.map((myurl: any) => (
              <li key={myurl.id} className={styles.list}>
                <Link
                  target="_blank" 
                  href={`${myurl.url}`}
                  rel="noopener noreferrer"
                  className={styles.link2}
                >
                  {myurl.name}
                </Link>
              </li>
            ))}
          </div>

          <div className={styles.parentverticaltext}> 
            <p className={styles.verticaltext}>ko@l@tr33-2023</p>
            <div className={styles.verticallongline}>
            </div>
          </div>

        </main>
      </div>
    </Layout>
  )
}
export default Home