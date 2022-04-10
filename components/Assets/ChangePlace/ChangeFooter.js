import { Component } from 'react/cjs/react.production.min'
import { Media } from 'react-breakpoints'
import styles from '/public/assets/css/Footer.module.css'
import EclipseMainTop from '../Eclipses/EclipseMainTop'
import Logo from '../Header/Logo'
import ButtonLink from '../ButtonLink'

class ChangeFooter extends Component {
    render() {
        return (
            <Media>
                {({ breakpoints, currentBreakpoint }) =>
                    breakpoints[currentBreakpoint] < breakpoints.footer ? (
                        <>
                            <div className={styles.footer + " d-flex margin-auto"}>
                            <p>© STARLIKES 2022 -<br/>Copyright. All Rights Reserved.</p>
                                <Logo className="footer"/>
                            </div>
                            <EclipseMainTop addName="eclipse-footer"/>
                            <EclipseMainTop addName="eclipse-footer-two"/>
                        </>
                    ) : (
                        <>
                            <div className={styles.footer + " d-flex between items-center margin-auto"}>
                                <Logo className="footer"/>
                                <p>© STARLIKES 2022 - Copyright. All Rights Reserved.</p>
                                <div className={styles["for-button"]}><ButtonLink href="" text="Заказать раскрутку"/></div>
                            </div>
                            <EclipseMainTop addName="eclipse-footer"/>
                            <EclipseMainTop addName="eclipse-footer-two"/>
                        </>
                    )
                }
            </Media>
        )
    }
}

export default ChangeFooter;