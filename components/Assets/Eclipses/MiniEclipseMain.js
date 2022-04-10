import styles from '/public/assets/css/BackGround.module.css'

const MiniEclipseMain = (props) => {
    return (
        <div className={styles["mini-eclipse"] + " pos-absolute border-circle " + styles[props.className] + " " + styles[props.addName]}></div>
    )
}

export default MiniEclipseMain;