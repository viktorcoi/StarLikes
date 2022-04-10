import styles from '/public/assets/css/BackGround.module.css'

const EclipseMainTop = (props) => {
    return (
        <div className={styles['eclipse-first'] + " pos-absolute " + styles[props.addName]}></div> 
    )
}

export default EclipseMainTop;