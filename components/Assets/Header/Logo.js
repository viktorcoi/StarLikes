import LinkA from '../Moduls/LinkA';
import styles from '/public/assets/css/Logo.module.css'


const Logo = (props) => {
    return (
        <LinkA className={styles.logo + " d-flex " + styles[props.className]} href="/">
            <span href='/'>star likes</span>
            <img alt='logo' src='/assets/img/logo.svg'></img>
        </LinkA>
    )
}

export default Logo;