
import Layout from "../../components/Layout"
import ButtonGoHome from "../../components/ButtonGoHome"
import ProjectsLinks from "../../components/ProjectsLinks"
import styles from '@/styles/Projects.module.scss'

const Projects:React.FC = () => {
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

        <ButtonGoHome />

        <h1 className={styles.mainheaderprojetcs}>My Projects</h1>

        <div className={styles.maindivofprojects}>
        
          <h2 className={styles.h2}>Quelques liens GitHub</h2>

          <hr className={styles.hr} />

          <ProjectsLinks />

          <hr className={styles.hr2} />
        </div>
      </div>
    </Layout>
  )
}
export default Projects