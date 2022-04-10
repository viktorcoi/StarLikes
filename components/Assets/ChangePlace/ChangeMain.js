import { Component } from 'react/cjs/react.production.min'
import { Media } from 'react-breakpoints'
import styles from '/public/assets/css/MainPage.module.css'
import BGimg from '../Moduls/BGimg'
import EclipseMainTop from '../Eclipses/EclipseMainTop'
import MiniEclipseMain from '../Eclipses/MiniEclipseMain'
import HTitle from '../Moduls/HTitle'
import HThird from '../Moduls/HThird'
import MainTitle from '../Moduls/MainTitle'
import ButtonLink from '../ButtonLink'
import PurpleBlock from '../PurpleBlock'

class ChangeMain extends Component {
    render() {
        return (
            <Media>
                {({ breakpoints, currentBreakpoint }) =>
                    breakpoints[currentBreakpoint] < breakpoints.desktop ? (
                        <>
                           <EclipseMainTop/>
                            <MiniEclipseMain className="left"/>
                            <MiniEclipseMain className="right"/>
                            <div className='d-flex between'>
                                <div className={styles["for-text"]}>
                                    <MainTitle>SMM СЕРВИС С ВЫСОКИМ КАЧЕСТВОМ УСЛУГ</MainTitle>
                                    <HTitle>
                                        STAR LIKES - это интернет магазин, где люди могут купить 
                                        все виды SMM - услуг на различные социальные сети
                                    </HTitle>
                                    <div className={styles["for-phone"] + ' pos-relative'}>
                                        <img className={styles.phone} alt='phone' src='/assets/img/phone.png'></img>
                                        <PurpleBlock className={styles.medal} img="medal">
                                            <HThird>
                                                Поддержка 24/7
                                                <p>Бесплатно</p>
                                            </HThird>
                                        </PurpleBlock>
                                        <PurpleBlock className={styles.flash} img="flash">
                                            <HThird>
                                                Сервис №1
                                                <p>Среди всех</p>
                                            </HThird>
                                        </PurpleBlock>
                                        <PurpleBlock className={styles.smile} img="smile">
                                            <div className='pos-relative'>
                                                <span className={styles["for-smile"] + ' pos-absolute d-flex items-center border-circle'}>4</span>
                                            </div>
                                        </PurpleBlock>
                                    </div>
                                    <ButtonLink href="" text="Попробовать сервис" />
                                </div>
                            </div> 
                        </>
                    ) : (
                        <>
                            <EclipseMainTop/>
                            <MiniEclipseMain className="left"/>
                            <MiniEclipseMain className="right"/>
                            <BGimg addName="right" img="purple-circle"/>
                            <BGimg addName="left" img="purple-circle"/>
                            <BGimg img="likes"/>
                            <BGimg img="red-circle"/>
                            <BGimg img="inst"/>
                            <div className='d-flex between'>
                                <div className={styles["for-text"]}>
                                    <MainTitle>SMM СЕРВИС С ВЫСОКИМ КАЧЕСТВОМ УСЛУГ</MainTitle>
                                    <HTitle>
                                        STAR LIKES - это интернет магазин, где люди могут купить 
                                        все виды SMM - услуг на различные социальные сети
                                    </HTitle>
                                    <ButtonLink href="" text="Попробовать сервис" />
                                </div>
                                <div className='pos-relative'>
                                    <img className={styles.phone} alt='phone' src='/assets/img/phone.png'></img>
                                    <PurpleBlock className={styles.medal} img="medal">
                                        <HThird>
                                            Поддержка 24/7
                                            <p>Бесплатно</p>
                                        </HThird>
                                    </PurpleBlock>
                                    <PurpleBlock className={styles.flash} img="flash">
                                        <HThird>
                                            Сервис №1
                                            <p>Среди всех</p>
                                        </HThird>
                                    </PurpleBlock>
                                    <PurpleBlock className={styles.smile} img="smile">
                                        <div className='pos-relative'>
                                            <span className={styles["for-smile"] + ' pos-absolute d-flex items-center border-circle'}>4</span>
                                        </div>
                                    </PurpleBlock>
                                </div>
                            </div>
                        </>
                    )
                }
            </Media>
        )
    }
}

export default ChangeMain;