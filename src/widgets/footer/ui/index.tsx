import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'



export const Footer = () => {
  return (
    <footer className={styles.root} >
              <div className='container' >
              
                  <div className={styles.contactsHolder} >
                    <div className={styles.contacts} >
                      <h2>КОНТАКТЫ</h2>
                      <ul className={styles.contactsList} >
                        <li>
                          <p>Приехать к нам:</p>
                          <p>Королев, мкр. Юбилейный, Маяковского д.2</p>
                        </li>
                        <li>
                          <p>Позвонить нам:</p>
                          <p><Link to='tel:+79671592326'>+7 (967) 159 23 26</Link></p>
                        </li>
                        <li>
                          <p>Написать нам:</p>
                          <p><Link to='mailto:sky-sport@yandex.ru' >sky-sport@yandex.ru</Link></p>
                        </li>
                      </ul>
                      <ul className={styles.links} >
                        <li><Link to='#' >Правила клуба</Link></li>
                        <li><Link to='#' >Политика конфидециальности</Link></li>
                        <li><Link to='#' >Публичная оферта</Link></li>
                      </ul>
                    </div>
                    <div className={styles.map} style={{position:"relative",overflow:"hidden"}}><a href="https://yandex.ru/maps/20728/korolev/?utm_medium=mapframe&utm_source=maps" style={{ color:"#eee", fontSize:"12px", position:"absolute", top:"0px"}}>Королёв</a><a href="https://yandex.ru/maps/20728/korolev/house/ulitsa_mayakovskogo_2/Z04YfgNjQUMAQFtvfXVzeXpgZw==/?from=mapframe&ll=37.843867%2C55.928633&source=mapframe&utm_medium=mapframe&utm_source=maps&z=16.87" style={{color: "#eee", fontSize: "12px", position: "absolute", top:"14px"}}>Улица Маяковского, 2 — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.843867%2C55.928633&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjkzMzg1NhKQAdCg0L7RgdGB0LjRjywg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCa0L7RgNC-0LvRkdCyLCDQvNC40LrRgNC-0YDQsNC50L7QvSDQrtCx0LjQu9C10LnQvdGL0LksINGD0LvQuNGG0LAg0JzQsNGP0LrQvtCy0YHQutC-0LPQviwgMiIKDR9gF0IV67ZfQg%2C%2C&source=mapframe&utm_source=mapframe&z=16.87" width="560" height="400" frameBorder="1" allowFullScreen={true} style={{position:"relative"}}></iframe></div>
                  </div>
                </div>
           
    </footer>
  )
}
