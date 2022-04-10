import styles from '/public/assets/css/Burger.module.css'

const Burger = (props) => {
    return (
        <div onClick={props.onClick} className={styles.burger + " pos-relative between transition_0_3 cursor-pointer " + styles[props.className]}>
            <div className="pos-absolute transition_0_3 border-circle"></div>
            <div className="pos-absolute transition_0_3 border-circle"></div>
            <div className="pos-absolute transition_0_3 border-circle"></div>
        </div>
    ) 
}

export default Burger;