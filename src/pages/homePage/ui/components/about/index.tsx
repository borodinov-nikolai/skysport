import styles from './About.module.scss'
import cs from 'classnames'


const About = () => {
  return (
    <div className={styles.root} >
        <div className={cs(styles.content, 'container')} >
            <h2>Почему выбирают нас</h2>
             <ul className={styles.advantagesList} >
                <li>
                    <h3>Корты</h3>
                    <p>В распоряжении членов и гостей клуба2 крытых теннисных корта с сертифицированным покрытием "Терафлекс". У нас Вы сможете получить профессиональную консультацию и заказать все необходимое оборудование и экипировку для игры в теннис.</p>
                </li>
             </ul>
        </div>
    </div>
  )
}

export default About