import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import styles from '@/styles/Evolution.module.scss'

interface handleChangeFuncProps {
  boolChange: boolean
  handleChangeFunc: (e:React.MouseEvent<HTMLButtonElement>) => void
}

const BtnArrow = ({ boolChange, handleChangeFunc }: handleChangeFuncProps) => {
  
  const changeLogo = () => {
    if (boolChange === false) {
      return `${styles.logoreact}`
    } else {
      return `${styles.rotationlogo}`
    }
  }
  
  return (
    <>
      <button 
        type='button' 
        onClick={handleChangeFunc}
        className={styles.button}
      >
        <BsFillArrowRightCircleFill
          className={changeLogo()}
          size={24}
        />
      </button>
    </>
  )
}
export default BtnArrow