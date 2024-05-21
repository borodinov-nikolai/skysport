import Button from '../../../../../shared/ui/button'
import styles from './MobileServices.module.scss'
import { Swiper, SwiperSlide} from 'swiper/react'


const MobileServices = ({scrollTo}: {scrollTo: ()=> void}) => {
  return (
    <div className={styles.root} >
          
          <h2 className={styles.title} >Услуги клуба</h2>

        <Swiper 
        slidesPerView={'auto'}
        spaceBetween={10}
        className={styles.swiper} >
            <SwiperSlide className={styles.slide} >
                <div className={styles.serviceCard} >
                    <div className={styles.imageHolder} ><img src={'/images/DSC02484.jpg'} /></div>
                    <div className={styles.serviceCard_content} >
                        <h3>Групповые занятия для детей</h3>
                        <ul className={styles.serviceCard_firstList} >
                            <li>Дети от 4-х лет</li>
                            <li>4 - 8 детей в группе</li>
                            <li>60 минут</li>
                        </ul>
                        <h4>Стоимость занятий:</h4>
                        <ul>
                            <li>- разовое занятие - <span>1.300 ₽</span></li>
                            <li>- 1 час в неделю - <span>4.600 ₽</span></li>
                            <li>- 2 часа в неделю - <span>8.000 ₽</span></li>
                            <li>- 3 часа в неделю - <span>12.000 ₽</span></li>
                        </ul>
                        <div className={styles.orderBtn} ><Button onClick={scrollTo} >Записаться</Button></div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide} >
                <div className={styles.serviceCard} >
                    <div className={styles.imageHolder} ><img src={'/images/DSC02505.jpg'} /></div>
                    <div className={styles.serviceCard_content} >
                        <h3>Групповые занятия для взрослых</h3>
                        <ul className={styles.serviceCard_firstList} >
                            <li>Любой возраст и уровень подготовки</li>
                            <li>4 - 6 человек в группе</li>
                            <li>60 минут</li>
                        </ul>
                        <h4>Стоимость занятий:</h4>
                        <ul>
                            <li>- разовое занятие - <span>1.300 ₽</span></li>
                            <li>- 1 час в неделю - <span>5.000 ₽</span></li>
                            <li>- 2 часа в неделю - <span>9.000 ₽</span></li>
                            <li>- Минни-группа(3-4 чел) - <span>4.500 ₽</span></li>
                        </ul>
                        <div className={styles.orderBtn} ><Button onClick={scrollTo} >Записаться</Button></div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide} >
                <div className={styles.serviceCard} >
                    <div className={styles.imageHolder} ><img src={'/images/DSC02477.jpg'} /></div>
                    <div className={styles.serviceCard_content} >
                        <h3>Персональные занятия с тренером</h3>
                        <p>Индивидуальные занятия помогут быстрее научиться игре в большой теннис, поднять свой профессиональный уровень.</p>
                        <h4>Стоимость занятий:</h4>
                        <ul>
                            <li>- 1 занятие - <span>2.200 ₽ + аренда корта</span></li>
                            <li>- сплит-тренировка (2 человека) - <span>2.500 ₽ + аренда корта</span></li>
                        </ul>
                        <div className={styles.orderBtn} ><Button onClick={scrollTo} >Записаться</Button></div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide} >
                <div className={styles.serviceCard} >
                    <div className={styles.imageHolder} ><img src={'/images/DSC02629.jpg'} /></div>
                    <div className={styles.serviceCard_content} >
                        <h3>Аренда тенисных кортов</h3>
                      <p>Вы можете арендовать корт для самостоятельной игры. На корте может находиться до 4 человек одновременно.</p>
                        <p>Стоимость аренды корта: от 1.300₽ до 1800₽ за час.</p>
                        <p>При покупке персональных тренировок и сплит-тренировок стоимость аренды карта от 1.100₽ - 1.650 ₽</p>
                        <div className={styles.orderBtn} ><Button onClick={scrollTo} >Записаться</Button></div>
                    </div>
                </div>
            </SwiperSlide>

       
        </Swiper>
    </div>
  )
}

export default MobileServices