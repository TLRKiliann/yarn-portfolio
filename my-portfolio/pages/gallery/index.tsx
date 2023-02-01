import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Gallery.module.scss'

const Gallery:React.FC = () => {
  const router = useRouter()

  const handleRoute = () => {
    router.replace('/')
  }
  return (
    <>
      <div className={styles.gallery}>

        <div className={styles.divbtn}>
          <button
            type='button'
            onClick={handleRoute}
            className={styles.btntopright}
          >
            Back to Home
          </button>
        </div>

        <div className={styles.thanks}>
          <h2 className={styles.h2thanks}>
            Thank you for watching !
          </h2>
        </div>


        <div>
          
          <h1 className={styles.gallerymainheader}>Gallery</h1>
          
          <div className={styles.framerimg}>

            <div className={styles.divimglegendgallery}>
              <AnimatePresence>
                <motion.img
                  src={'/images/bg_1.png'}
                  href="https://www.youtube.com/watch?v=8g789tQ2gyY"
                  width="780"
                  height="500"
                  drag="x" 
                  dragConstraints={{right:0, left:-1200}} 
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                  className={styles.img2}  
                >
                </motion.img>
              </AnimatePresence>
            </div>

            <div className={styles.divimglegendgallery}>
              <AnimatePresence>
                <motion.img
                  src={'/images/bg_3.png'}
                  width="780"
                  height="500"
                  drag="x" 
                  dragConstraints={{right:0, left:-1200}} 
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                  className={styles.img3}  
                >
                </motion.img>
              </AnimatePresence>
            </div>

            <div className={styles.divimglegendgallery}>
              <AnimatePresence>
                <motion.img
                  src={'/images/screen3.png'}
                  width="780"
                  height="500"
                  drag="x" 
                  dragConstraints={{right:0, left:-1200}} 
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                  className={styles.img3}  
                >
                </motion.img>
              </AnimatePresence>
            </div>

            <div className={styles.divimglegendgallery}>
              <AnimatePresence>
                <motion.img
                  src={'/images/screen4.png'}
                  width="780"
                  height="500"
                  drag="x" 
                  dragConstraints={{right:0, left:-1200}} 
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                  className={styles.img3}  
                >
                </motion.img>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Gallery

