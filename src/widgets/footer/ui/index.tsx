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
                          <p><Link to='tel:+74951201177'>+7 (495) 120-11-77</Link></p>
                        </li>
                        <li>
                          <p>Написать нам:</p>
                          <p><Link to='mailto:op.korolev1@gmail.com' >op.korolev1@gmail.com</Link></p>
                        </li>
                      </ul>
                      <ul className={styles.links} >
                        <li><Link to='#' >Правила клуба</Link></li>
                        <li><Link to='#' >Политика конфидециальности</Link></li>
                        <li><Link to='#' >Публичная оферта</Link></li>
                      </ul>
                    </div>
                    <div className={styles.map} style={{position:"relative",overflow:"hidden"}}><a href="https://yandex.ru/maps/org/komanda_pervykh/189352728331/?utm_medium=mapframe&utm_source=maps" style={{ color:"#eee", fontSize:"12px", position:"absolute", top:"0px"}}>Команда Первых</a><a href="https://yandex.ru/maps/20728/korolev/category/fitness_club/184107363/?utm_medium=mapframe&utm_source=maps" style={{color: "#eee", fontSize: "12px", position: "absolute", top:"14px"}}>Фитнес-клуб в Королёве</a><a href="https://yandex.ru/maps/20728/korolev/category/sports_club/184107297/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize: "12px", position:"absolute", top:"28px"}}>Спортивный клуб, секция в Королёве</a><iframe src="https://yandex.ru/map-widget/v1/org/komanda_pervykh/189352728331/?from=mapframe&ll=37.854250%2C55.956821&source=mapframe&utm_source=mapframe&z=11" width="560" height="400" frameBorder="1" allowFullScreen={true} style={{position:"relative"}}></iframe></div>
                  </div>
                  <div className={styles.info} >
                    <p>2023 © ООО «ПЕРВЫЙ ФИТНЕС»</p>
                    <p>ИНН 5018210079, ОГРН 1215000127550 , КПП 501801001</p>
                    <p>141090, Московская Область, г.о. Королёв, г Королёв, мкр Юбилейный, ул Маяковского, дом 2</p>
                  </div>
                </div>
           
    </footer>
  )
}
