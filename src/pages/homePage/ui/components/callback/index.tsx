import { Link } from 'react-router-dom';
import styles from './Callback.module.scss'
import InputMask from 'react-input-mask';


const Callback = () => {
  return (
    <div className={styles.root} >
      <div className="container">
        <div className={styles.inner} >
          <div className={styles.content} >
            <span className={styles.line} ></span>
            <div className={styles.formHolder} >
                <p className={styles.title} >
                  <h2>ОСТАЛИСЬ ВОПРОСЫ?</h2>
                  <p>Оставьте заявку мы вам перезвоним!</p>
                </p>
                  <form className={styles.form} action="">
                    <div className={styles.formItem} >
                      <input  placeholder='Имя' type="text" />
                    </div>
                    <div className={styles.formItem} >
                    <InputMask
                                className={styles.phoneInput}
                            mask="+7 (999) 999-99-99"
                            placeholder="+7 (___) ___-__-__"
                          />
                    </div>
                    <button >Оставить заявку</button>
                  </form>
            
            </div>
            <span className={styles.line} ></span>
          </div>
                <p className={styles.politics} >Оставляя Ваши контактные данные, Вы даете согласие на обработку персональных данных, осуществляемых в соответствии с <Link to='#' >ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ</Link> </p>
        </div>
      </div>

    </div>
  )
}

export default Callback