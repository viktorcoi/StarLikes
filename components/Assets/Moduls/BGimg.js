import styles from '/public/assets/css/BackGround.module.css'

const BGimg = (props) => {
    return (
        <img className={styles[props.img] + " " + styles[props.addName] + " pos-absolute " + styles["bg-img"]} alt='bacgroung image' src={'/assets/img/' + props.img + '.png'}></img>
    )
}

export default BGimg;