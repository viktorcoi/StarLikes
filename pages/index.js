import { Component } from 'react';
import Container from '../components/Assets/Moduls/Container';
import HTitle from '../components/Assets/Moduls/HTitle';
import styles from '/public/assets/css/MainPage.module.css'
import ButtonLink from '../components/Assets/ButtonLink';
import ElementAboutUs from '../components/Assets/ElementAboutUs';
import BlockForQuestion from '../components/Assets/BlockForQuestion';
import Step from '../components/Assets/Step';
import EclipseMainTop from '../components/Assets/Eclipses/EclipseMainTop';
import MiniEclipseMain from '../components/Assets/Eclipses/MiniEclipseMain';
import BGimg from '../components/Assets/Moduls/BGimg';
import ChangeMain from '../components/Assets/ChangePlace/ChangeMain';

class MainPage extends Component {
    render () {
        return (
           <Container>
                <section className={styles["main-block"] + " pos-relative"}>
                    <ChangeMain/>
                </section>
                <section className={styles['about-us']} id="about-us">
                    <HTitle>О нашем сервисе</HTitle>
                    <p>
                        Узнайте о наших плюсах и почему Вам нужно воспользоваться 
                        именно нашим сервисом
                    </p>
                    <div className={styles["for-elements"] + ' d-flex between'}>
                        <ElementAboutUs img="mount" title="Высокое качество" text="Аккаунты с аватарками и публикациями"/>
                        <ElementAboutUs img="racket" title="Быстрый запуск" text="Запуск просмотров происходит мгновенно"/>
                        <ElementAboutUs img="target" title="Улучшаем статистику" text="Вместе с просмотрами прибавляются охваты"/>
                        <ElementAboutUs img="iphone" title="Отличная поддержка" text="Мы всегда на связи, чтобы помочь вам"/>
                    </div>
                </section>
                <section className={styles.questions + " pos-relative"} id="FAQ">
                    <EclipseMainTop addName="eclipse-two"/>
                    <HTitle>Часто задаваемые вопросы</HTitle>
                    <MiniEclipseMain className="left" addName="question-left"/>
                    <MiniEclipseMain className="right" addName="question-right"/>
                    <BGimg addName="question-left" img="purple-circle"/>
                    <BGimg addName="question-right" img="purple-circle"/>
                    <BGimg img="heart"/>
                    <BGimg img="bookmark"/>
                    <BGimg img="people"/>
                    <p>
                        Узнайте о наших плюсах и почему Вам нужно 
                        воспользоваться именно нашим сервисом
                    </p>
                    <div>
                        <BlockForQuestion number="01" question="Через какое время выполняются услуги?">
                            Запуск лайков и просмотров начинается в течение 5-30 минут после оплаты.<br/>
                            Запуск подписчиков — в течение 5-300 минут после оплаты.<br/>
                            Запуск просмотров историй — в течение 5-60 минут после оплаты.<br/>
                            Запуск репостов — в течение 5-120 минут после оплаты.<br/>
                            Накрутка производится постепенно, в целях безопасности вашего аккаунта.<br/>
                        </BlockForQuestion>
                        <BlockForQuestion number="02" question="Мой профиль должен быть открытым?">
                            Да, ваш профиль обязательно должен быть открытым.<br/>
                            Продвижение закрытых страниц невозможно.<br/>
                            Также на профиле не должно быть установлено возрастных ограничений.<br/>
                        </BlockForQuestion>
                        <BlockForQuestion number="03" question="Я могу поменять логин после оформления заказа?">
                            Менять логин после оплаты категорически нельзя. Если такое происходит, 
                            мы теряем вашу страницу, и все усилия, потраченные на раскрутку, сгорают.
                        </BlockForQuestion>
                        <BlockForQuestion number="04" question="Это живые люди?">
                            В зависимости от текущих алгоритмов социальной сети накрутка производится 
                            смешанного типа: 30% живых подписчиков и остальное качественные боты (роботы) 
                            с аватарками и публикациями.
                        </BlockForQuestion>
                        <BlockForQuestion number="05" question="Я нахожусь в другой стране, могу ли я оформить заказ?">
                            Да, конечно. Вы можете оформить заказ из любой страны и выполнить оплату любым 
                            удобным вам способом.
                        </BlockForQuestion>
                    </div>
                    <div className={styles.ask + ' d-flex'}>
                        <HTitle>У Вас остались вопросы?</HTitle>
                        <ButtonLink text="Задать вопрос" href=""/>
                    </div>
                </section>
                <section className={styles['steps-launch'] + " pos-relative"} id="steps-launch">
                    <MiniEclipseMain className="for-step" addName="left-step"/>
                    <MiniEclipseMain className="for-step" addName="right-step"/>
                    <div className='border-7px'>
                        <HTitle>Шаги для запуска</HTitle>
                        <p>С нами заказать раскрутку в<br/>социальных сетях очень просто</p>
                        <div className={styles["for-steps"] + ' d-flex between'}>
                            <Step img="shop" number="01">Выбрать необходимый пакет услуг</Step>
                            <img className={styles['img-next']} alt='next step' src='/assets/img/arrow-right.svg'></img>
                            <Step img="pc" number="02">Заполнить форму заказа</Step>
                            <img className={styles['img-next']} alt='next step' src='/assets/img/arrow-right.svg'></img>
                            <Step img="safe" number="03">Произведите оплату</Step>
                        </div>
                        <ButtonLink className="margin-auto" text="Попробовать сервис" href=""></ButtonLink>
                    </div>
                </section>
           </Container>
        )
    } 
}

export default MainPage;