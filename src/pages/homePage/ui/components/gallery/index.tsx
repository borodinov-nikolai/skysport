import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import styles from './Gallery.module.scss'
import cs from 'classnames'
import 'swiper/css';
import { Image } from 'antd';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


const slideslist = [
    {
        id: 1,
        image: '/images/DSC02697.jpg'
    },
    {
        id: 2,
        image: '/images/DSC02477.jpg'
    },
    {
        id: 3,
        image: '/images/DSC02574.jpg'
    },
    {
        id: 4,
        image: '/images/DSC02650.jpg'
    },
    {
        id: 5,
        image: '/images/DSC02553.jpg'
    },
]





const Gallery = () => {
    let swiper: SwiperClass


  return (
    <div className={styles.root} >
        <Swiper
        breakpoints={{
            768: {
                slidesPerView: 2,
                spaceBetween: 80,
                allowTouchMove: false
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 80,
                allowTouchMove: false
            },
            1400: {
                slidesPerView: 2,
                spaceBetween: 100,
                allowTouchMove: false
            },

        }}
        className={styles.swiper}
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={0}
        loop={true}
        onSwiper={(swiperInstance: SwiperClass) => {
            swiper = swiperInstance;
        }}
        >
         {
            slideslist?.map(({id, image})=>
                <SwiperSlide className={styles.slide}  key={id} > <Image  src={image} alt="gallery image" /> </SwiperSlide>
            )
         }


        <button onClick={()=> swiper?.slidePrev()} className={cs(styles.prevBtn, styles.navBtn)} ><SlArrowLeft /></button>
        <button onClick={()=> swiper?.slideNext()} className={cs(styles.nextBtn, styles.navBtn)} ><SlArrowRight /></button>
        <div className={cs(styles.leftMask, styles.mask)} ></div>
        <div className={cs(styles.rightMask, styles.mask)} ></div>
        </Swiper>
    </div>
  )
}

export default Gallery