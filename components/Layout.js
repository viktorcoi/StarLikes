import { Header } from "./Assets/Header/Header"
import { Footer } from "./Assets/Footer/Footer"
import AuthorizationPopup from "./Assets/Popups/AuthorizationPopup"
import RegistrationPopup from "./Assets/Popups/RegistrationPopup"
import { useState, useEffect } from "react"

export function Layout({children}) {
  
    const [popupAuth, open_popupAuth] = useState(false);
    const [popupReg, open_popupReg] = useState(false);

    const OpenPopup = (set,i) => {
        set(!i);   
    };

    useEffect(() => {
        if((popupAuth || popupReg) == true) {
            document.body.style.position = 'fixed';
        }
        if((popupAuth || popupReg) == false) {
            document.body.style.position = 'unset';
        }
    })

    return (
        <>
            <Header onClick={() => OpenPopup(open_popupAuth, popupAuth)}/>    
                <main>
                    <AuthorizationPopup ClickClose={() => OpenPopup(open_popupAuth, popupAuth)} className={popupAuth ? "open" : ""}
                        clickRegistration={() => {OpenPopup(open_popupReg,popupReg), OpenPopup(open_popupAuth, popupAuth)}}>
                    </AuthorizationPopup>
                    <RegistrationPopup ClickClose={() => OpenPopup(open_popupReg, popupReg)} className={popupReg ? "open" : ""}
                    clickAuthorization={() => {OpenPopup(open_popupReg,popupReg), OpenPopup(open_popupAuth, popupAuth)}}>
                    </RegistrationPopup>
                    {children}
                </main> 
            <Footer/>
        </>
    )
}