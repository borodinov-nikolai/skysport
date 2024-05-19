import About from '../components/about'
import Gallery from '../components/gallery'
import styles from './HomePage.module.scss'



export const HomePage = () => {
  return (
   <main className={styles.root}  >
      <div className={styles.mainBackground}></div>
      <section className={styles.hero} >
        <h1>ТЕННИСНЫЙ КЛУБ</h1>
        <p>
        БОЛЬШОЙ ТЕННИС <br />
        ДЛЯ ДЕТЕЙ И ВЗРОСЛЫХ <br />
        В КОРОЛЕВЕ
        </p>
      </section>
      <section className={styles.gallery} >
        <Gallery/>
      </section>
      <section className={styles.about} >
        <About/>
      </section>
      <section>

      </section>
    </main>
  )
}
