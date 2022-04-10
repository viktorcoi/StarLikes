import HThird from './Moduls/HThird';
import styles from '/public/assets/css/MainPage.module.css'

const ElementAboutUs = (props) => {
    return (
        <div className={styles['element-us']}>
            <img src={'/assets/img/' + props.img + '.png'} alt='our service'></img>
            <HThird>
                {props.title}
                <p>{props.text}</p>
            </HThird>
            
        </div>
    )
}

export default ElementAboutUs;