import { useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import Layout from "../../components/Layout"
import ButtonGoHome from "../../components/ButtonGoHome"
import styles from '@/styles/Gallery.module.scss'

const Gallery:React.FC = () => {
  const router = useRouter() as any

  const handleRoute = () => {
    router.replace('/')
  }

  return (
    <Layout>
      <div className={styles.gallery}>

        <ButtonGoHome />

        <div>
          <h1 className={styles.gallerymainheader}>
            Gallery
          </h1>
          
          <div className={styles.framerimg}>
            <div className={styles.thanks}>
              <h2 className={styles.h2thanks}>
                Thank you for watching !
              </h2>
            </div>

            <div className={styles.divimglegendgallery}>
              <motion.img
                src={'/images/routerip.png'}
                width="640"
                height="400"
                drag="x" 
                dragConstraints={{right:0, left:-1200}} 
                dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                className={styles.img1}  
              >
              </motion.img>
            </div>

            <div className={styles.divimglegendgallery}>
              <motion.img
                src={'/images/vmrouter.png'}
                width="640"
                height="400"
                drag="x" 
                dragConstraints={{right:0, left:-1200}} 
                dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                className={styles.img2}  
              >
              </motion.img>
            </div>

            <div className={styles.divimglegendgallery}>
              <motion.img
                src={'/images/ping.png'}
                width="640"
                height="400"
                drag="x" 
                dragConstraints={{right:0, left:-1200}} 
                dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                className={styles.img3}  
              >
              </motion.img>
            </div>

            <div className={styles.divimglegendgallery}>
              <motion.img
                src={'/images/bg_1.png'}
                width="640"
                height="400"
                drag="x" 
                dragConstraints={{right:0, left:-1200}} 
                dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                className={styles.img4}  
              >
              </motion.img>
            </div>

            <div className={styles.divimglegendgallery}>
              <motion.img
                src={'/images/screen3.png'}
                width="640"
                height="400"
                drag="x" 
                dragConstraints={{right:0, left:-1200}} 
                dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                className={styles.img5}  
              >
              </motion.img>
            </div>

            <div className={styles.divimglegendgallery}>
              <motion.img
                src={'/images/screen4.png'}
                width="640"
                height="400"
                drag="x" 
                dragConstraints={{right:0, left:-1200}} 
                dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                className={styles.img6}  
              >
              </motion.img>
            </div>

            <div className={styles.divimglegendgallery}>
              <motion.img
                src={'/images/time-track.png'}
                width="640"
                height="400"
                drag="x" 
                dragConstraints={{right:0, left:-1200}} 
                dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                className={styles.img7}
              >
              </motion.img>
            </div>

            <div className={styles.divimglegendgallery}>
              <motion.img
                src={'/images/tt-nier3.png'}
                width="640"
                height="400"
                drag="x" 
                dragConstraints={{right:0, left:-1200}} 
                dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                className={styles.img8}
              >
              </motion.img>
            </div>

            <div className={styles.divimglegendgallery}>
              <motion.img
                src={'/images/tt-nier2.png'}
                width="640"
                height="400"
                drag="x" 
                dragConstraints={{right:0, left:-1200}} 
                dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                className={styles.img9}
              >
              </motion.img>
            </div>

            <div className={styles.divimglegendgallery}>
              <motion.img
                src={'/images/tt-nier1.png'}
                width="640"
                height="400"
                drag="x" 
                dragConstraints={{right:0, left:-1200}} 
                dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                className={styles.img10}
              >
              </motion.img>
            </div>

            <div className={styles.divdragndrop}>
              <p className={styles.doublearrow}>↔</p>
              <h2 className={styles.dragndrop}>👆 Drag'n Drop !</h2>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Gallery
