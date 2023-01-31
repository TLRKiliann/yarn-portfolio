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
        <div>
          
          <h1 className={styles.gallerymainheader}>Gallery</h1>
          
          <div className={styles.framerimg}>
            <div className={styles.divimglegendgallery}>
              <AnimatePresence>
                <motion.img
                  src={'/coolnection.jpg'}
                  width="700"
                  height="400"
                  drag="x" 
                  dragConstraints={{right: 0, left:-1200}} 
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                  className={styles.img}  
                >
                </motion.img>
              </AnimatePresence>
              <Link href="https://www.youtube.com/watch?v=zOFffvevzAQ"
                className={styles.linkgallery1}>
                Time-Track
              </Link>
            </div>

            <div className={styles.divimglegendgallery}>
              <AnimatePresence>
                <motion.img
                  src={'/coolnection.jpg'}
                  href="https://www.youtube.com/watch?v=8g789tQ2gyY"
                  width="700"
                  height="400"
                  drag="x" 
                  dragConstraints={{right: 0, left:-1200}} 
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                  className={styles.img2}  
                >
                </motion.img>
              </AnimatePresence>
              <Link href="https://www.youtube.com/watch?v=zOFffvevzAQ"
                className={styles.linkgallery2}>
                Time-Track 2
              </Link>
            </div>

            <div className={styles.divimglegendgallery}>
              <AnimatePresence>
                <motion.img
                  src={'/coolnection.jpg'}
                  width="700"
                  height="400"
                  drag="x" 
                  dragConstraints={{right: 0, left:-1200}} 
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
                  className={styles.img3}  
                >
                </motion.img>
              </AnimatePresence>
              <Link href="https://www.youtube.com/watch?v=zOFffvevzAQ"
                className={styles.linkgallery3}>
                Time-Track 3
              </Link>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Gallery

