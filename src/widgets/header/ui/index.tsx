import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import cs from 'classnames'

export const Header = () => {
  return (
    <header className={styles.root} >
        <div className={styles.inner} >
            <div className={styles.logo} > <Link to='/' >Скай-Спорт</Link> </div>
            <nav>
                <ul className={styles.navList}>
                    <li><Link to='/' >Теннисный клуб</Link></li>
                    <li><Link to='/' >Арендные помещения</Link></li>
                    <li><Link to='/' >О нас</Link></li>
                </ul>
            </nav>
            <div className={styles.phone} > <Link to={'tel:+74951201177'} >{'+7(495)120-11-77'}</Link> </div>
        </div> 
    </header>
  )
}
