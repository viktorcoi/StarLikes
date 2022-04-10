import { useState, useEffect } from "react";
import Head from 'next/head';
import Logo from './Logo'
import NavigationPanel from './NavigationPanel'
import styles from '/public/assets/css/Header.module.css'
import ChooseLanguage from './ChooseLanguage'
import Burger from './Burger'

export function Header(props) {
    
    const [menu, open_menu] = useState(false);

    const OpenMenu = (set, i) => {
        set(!i);
    };
   
    useEffect(() => {
        if (window.innerWidth <= 999) {
            document.body.style.position = menu ? 'fixed' : 'unset';
            
        }
    })

    return (
        <>
            <Head>
                <meta charset="UTF-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="robots" content="index, follow"></meta>
                <meta name="og:title" property="og:title" content="STAR LIKES - это интернет магазин, где люди могут купить все виды SMM - услуг на различные социальные сети."/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="StarLikes"/>
                <meta name="twitter:description" content="STAR LIKES - это интернет магазин, где люди могут купить все виды SMM - услуг на различные социальные сети."/>
                <meta name="twitter:image" content="/assets/img/logo.svg"/>
                <link rel="canonical" href="/"/>
                <link rel="icon" href="/assets/img/logo.svg"/>
                <meta name="description" content="STAR LIKES - это интернет магазин, где люди могут купить все виды SMM - услуг на различные социальные сети."/>
                <title>StarLikes</title>
            </Head>
            <header>
                <div className={styles.header + " d-flex between items-center margin-auto"}>
                    <Logo className="header"/>
                    <div onClick={() => OpenMenu(open_menu, menu)} className={styles["bg-menu"] + " transition_0_3 " + (menu ? styles.open : "")}></div>
                    <div className={styles["for-navigation"] + ' d-flex between transition_0_3 ' + (menu ? styles.open : "")}>
                        <NavigationPanel clickClose={() => OpenMenu(open_menu, menu)}/>
                        <div className="d-flex">
                            <ChooseLanguage mainClass={styles["for-language"]} addClass={styles.open} className={styles.language} class={styles["two-language"]}/>
                            <div onClick={() => OpenMenu(open_menu, menu)}>
                                <button onClick={props.onClick} className='d-flex items-center border-7px'>
                                    Войти
                                    <img src='/assets/img/enter.svg' alt='enter'></img>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Burger onClick={() => OpenMenu(open_menu, menu)} className={(menu ? "open" : "")}/>
                </div>
            </header>
        </>
    )
}