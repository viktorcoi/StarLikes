import { useState } from 'react';
import ButtonPopup from './ButtonPopup';
import styles from '/public/assets/css/Popups.module.css'

const RegistrationPopup = (props) => {

    const text = "password";
  
    const [valueText, setvalueText] = useState(text);
    const [valueTextConfirm, setvalueTextConfirm] = useState(text);

    const handleClick = (set ,index) => {
        if (index == "password") {
            text = "text";
            set("text", index)
     
        } else {
            text = "password";
            set("password", index)
        }
    }

    return(
        <div className={styles["bg-popup"] + " d-flex transition_0_3 " + styles[props.className]}>
            <div onClick={props.ClickClose} className={styles["for-close"]}></div>
            <div className={styles.popup + " margin-auto pos-relative transition_0_3 border-7px"}>
                <img onClick={props.ClickClose} className={styles.close + ' pos-absolute cursor-pointer transition_0_3'} src='/assets/img/close.svg' alt='view password'></img>
                <div className={styles["for-choose-popup"] + ' d-flex between'}>
                    <p onClick={props.clickAuthorization} className={styles["not-open"] + ' cursor-pointer transition_0_3'}>Авторизация</p>
                    <p className='cursor-pointer'><strong>Регистрация</strong></p>
                </div>
                <form className='d-flex'>
                    <input name='login-reg' type="text" placeholder='Введите логин' required></input>
                    <input name='mail-reg' type="text" placeholder='Введите логин' required></input>
                    <div className='pos-relative'>
                        <input name='password-reg' type={valueText} placeholder='Введите пароль' required></input>
                        <img onClick={() => handleClick(setvalueText, valueText)} className={styles["view-password"] + ' pos-absolute cursor-pointer transition_0_3'} src='/assets/img/eye.svg' alt='view password'></img>
                    </div>
                    <div className='pos-relative'>
                        <input name='password-reg-confirm' type={valueTextConfirm} placeholder='Подтвердите пароль' required></input>
                        <img onClick={() => handleClick(setvalueTextConfirm, valueTextConfirm)} className={styles["view-password"] + ' pos-absolute cursor-pointer transition_0_3'} src='/assets/img/eye.svg' alt='view password'></img>
                    </div>
                    <ButtonPopup text="Авторизоваться"></ButtonPopup>
                </form>
                <div className={styles["for-hint"] + " d-flex items-center"}>
                    <p>У вас есть аккаунт? <span onClick={props.clickAuthorization} className={styles.blue + " cursor-pointer transition_0_3"}>
                        Войти
                        </span>
                    </p>
                </div>
            </div>
        </div>   
    )
}

export default RegistrationPopup;