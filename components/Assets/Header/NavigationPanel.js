import LinkA from "../Moduls/LinkA";

const NavigationPanel = (props) => {
    return(
        <nav className="d-flex items-center">
            <LinkA onClick={props.clickClose} href="/">Главная</LinkA>
            <LinkA onClick={props.clickClose} href="#about-us">О нас</LinkA>
            <LinkA onClick={props.clickClose} href="#FAQ">FAQ</LinkA>
            <LinkA onClick={props.clickClose} href="#steps-launch">Как начать работать</LinkA>
        </nav>
    )
}

export default NavigationPanel;