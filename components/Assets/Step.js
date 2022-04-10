import styles from '/public/assets/css/MainPage.module.css'

const Step = (props) => {
    return (
        <div className={styles['step']}>
            <div className={styles['step-img'] + " pos-relative"}>
                <img alt="img step" src={'/assets/img/' + props.img + '.png'}></img>
                <div className='pos-absolute border-circle'></div>
            </div>
            <div className='d-flex items-center'>
                <span>{props.number}</span>
                <h3>{props.children}</h3>
            </div>
        </div>
    )
}

export default Step;