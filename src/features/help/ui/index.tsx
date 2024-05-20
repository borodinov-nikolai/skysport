import styles from './Help.module.scss'
import { FaPhoneVolume } from "react-icons/fa6";


export const Help = () => {

  return (
    <div>
      <button className={styles.root} ><FaPhoneVolume /></button>
    
    </div>
  )
}
