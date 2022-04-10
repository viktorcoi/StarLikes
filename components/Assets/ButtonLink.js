import LinkA from './Moduls/LinkA';
import styles from '/public/assets/css/Buttons.module.css'

const ButtonLink = (props) => {
    return (
        <LinkA className={styles["button-link"] + " d-flex items-center pos-relative " + props.className} href={props.href}>
            <span className='d-flex'>
                {props.text}
                <img alt='ok' src='/assets/img/ok.svg'></img>
            </span>
            
        </LinkA>
    )
}

export default ButtonLink;