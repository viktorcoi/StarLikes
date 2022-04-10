import styles from '/public/assets/css/PurpleBlocks.module.css'

const PurpleBlock = (props) => {
    return (
        <div className={styles["block-purple"] + " d-flex items-center border-7px pos-absolute " + props.className}>
            <img alt='info us' src={'/assets/img/' + props.img + '.png'}></img>
            {props.children}
        </div>
    )
}

export default PurpleBlock;