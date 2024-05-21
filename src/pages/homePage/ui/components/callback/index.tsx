import { Link } from 'react-router-dom';
import styles from './Callback.module.scss'
import { message } from 'antd';
import { useState } from 'react';
import { PatternFormat } from 'react-number-format';


const Callback = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [name, setName] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [error, setError] = useState<string>()



  const success = () => {


    if(number.length >= 17 && number[number.length-1] !== '_' && name.length > 1) {
      messageApi.open({
        type: 'success',
        content: 'Ваша заявка успешно отправлена!',
        style: {
          marginTop: "60px"
        }
      });
      setError(undefined)
      setName('')
      setNumber('')
    } else {
      setError('Пожалуйста введите корректные данные')
    }
   
  };




  return (
    <div className={styles.root} >
      {contextHolder}
      <div className="container">
        <div className={styles.inner} >
          <div className={styles.content} >
            <span className={styles.line} ></span>
            <div className={styles.formHolder} >
              <div className={styles.title} >
                <h2>ОСТАЛИСЬ ВОПРОСЫ?</h2>
                <p>Оставьте заявку мы вам перезвоним!</p>
              </div>
              <form className={styles.form} action="">
                <div className={styles.formItem} >
                  <input value={name} onChange={(e) => setName(e.target.value.replace(/[^а-яА-Яa-zA-Z]/g, ''))} placeholder='Имя' type="text" />
                </div>
                <div className={styles.formItem} >
                  <PatternFormat
                    
                    format="+7 (###) #### ###"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    className="phoneInput"
                    placeholder="+7 (___) ___-__-__"
                    mask="_" 
                  />
                 
                </div>
                <button type='button' onClick={success} >Оставить заявку</button>
                {error && <p className={styles.error} >{error}</p>}
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