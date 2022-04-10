import { useState } from 'react';
import ButtonPopup from './ButtonPopup';
import styles from '/public/assets/css/Popups.module.css'

const AuthorizationPopup = (props) => {

    const text = "password";
  
    const [valueText, setvalueText] = useState(text);

    const handleClick = () => {
        if (valueText == "password") {
            text = "text";
            setvalueText("text", valueText)
     
        } else {
            text = "password";
            setvalueText("password", valueText)
        }
    }

    return(
        <div className={styles["bg-popup"] + " d-flex transition_0_3 " + styles[props.className]}>
            <div onClick={props.ClickClose} className={styles["for-close"]}></div>
            <div className={styles.popup + " margin-auto pos-relative transition_0_3 border-7px"}>
                <img onClick={props.ClickClose} className={styles.close + ' pos-absolute cursor-pointer transition_0_3'} src='/assets/img/close.svg' alt='view password'></img>
                <div className={styles["for-choose-popup"] + ' d-flex between'}>
                    <p className='cursor-pointer'><strong>Авторизация</strong></p>
                    <p onClick={props.clickRegistration} className={styles["not-open"] + ' cursor-pointer transition_0_3'}>Регистрация</p>
                </div>
                <form className='d-flex'>
                    <input name='login' type="text" placeholder='Введите логин' required></input>
                    <div className='pos-relative'>
                        <input name='password' type={valueText} placeholder='Введите пароль' required></input>
                        <img onClick={handleClick} className={styles["view-password"] + ' pos-absolute cursor-pointer transition_0_3'} src='/assets/img/eye.svg' alt='view password'></img>
                    </div>
                    <ButtonPopup text="Авторизоваться"></ButtonPopup>
                </form>
                <div className={styles["for-hint"] + " d-flex items-center"}>
                    <p>Новый пользователь? <span onClick={props.clickRegistration} className={styles.blue + " cursor-pointer transition_0_3 " + styles["create-acc"]}>
                            Создать учётную запись
                        </span>
                    </p>
                    <p className={styles.blue + " cursor-pointer transition_0_3"}>Забыли пароль?</p>
                </div>
            </div>
        </div>  
    )
}

export default AuthorizationPopup;