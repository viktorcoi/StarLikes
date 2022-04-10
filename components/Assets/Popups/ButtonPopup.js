import styles from '/public/assets/css/Buttons.module.css'

const ButtonPopup = (props) => {
    return (
        <button className={styles["button-popup"] + " pos-relative " + props.className}><span>{props.text}</span></button>
    )
}

export default ButtonPopup;