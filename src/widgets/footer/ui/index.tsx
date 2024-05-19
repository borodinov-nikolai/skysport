import styles from './Footer.module.scss'



export const Footer = () => {
  return (
    <footer className={styles.root} >
              <div className='container' >
                <div className={styles.inner} >
                  <div className={styles.map} style={{position:"relative",overflow:"hidden"}}><a href="https://yandex.ru/maps/org/komanda_pervykh/189352728331/?utm_medium=mapframe&utm_source=maps" style={{ color:"#eee", fontSize:"12px", position:"absolute", top:"0px"}}>Команда Первых</a><a href="https://yandex.ru/maps/20728/korolev/category/fitness_club/184107363/?utm_medium=mapframe&utm_source=maps" style={{color: "#eee", fontSize: "12px", position: "absolute", top:"14px"}}>Фитнес-клуб в Королёве</a><a href="https://yandex.ru/maps/20728/korolev/category/sports_club/184107297/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize: "12px", position:"absolute", top:"28px"}}>Спортивный клуб, секция в Королёве</a><iframe src="https://yandex.ru/map-widget/v1/org/komanda_pervykh/189352728331/?from=mapframe&ll=37.854250%2C55.956821&source=mapframe&utm_source=mapframe&z=11" width="560" height="400" frameBorder="1" allowFullScreen={true} style={{position:"relative"}}></iframe></div>
                </div>
              </div>
    </footer>
  )
}
