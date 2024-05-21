import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { RxHamburgerMenu } from "react-icons/rx";


export const Header = () => {
  return (
    <header className={styles.root} >
        <div className={styles.inner} >
            <div className={styles.logo} > <Link to='/' >Скай-Спорт</Link> </div>
       
            <div className={styles.phone} > <Link to={'tel:+79671592326'} >{'+7 (967) 159 23 26'}</Link> </div>
           
        </div> 
    </header>
  )
}
