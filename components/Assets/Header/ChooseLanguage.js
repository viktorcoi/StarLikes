import { useState } from "react";

const ChooseLanguage = (props) => {

    const en = "EN";
    const ru = "RU"
    const [valueEN, setvalueEN] = useState(en);
    const [valueRU, setvalueRU] = useState(ru);

    const handleClick = () => {
        if (valueEN == "EN") {
            en = "RU";
            setvalueEN("RU", valueEN)
            ru = "EN";
            setvalueRU("EN", valueRU)
        } else {
            en = "EN";
            setvalueEN("EN", valueEN)
            ru = "RU";
            setvalueRU("RU", valueEN)
        }
    }

    const [choose, open_choose] = useState(false);

    const OpenChoose = () => {
        open_choose(!choose);
    };

    return (
        <div className={props.mainClass + ' pos-relative'}>
            <div onClick={() => OpenChoose(choose)} className={props.className + " d-flex items-center border-7px cursor-pointer transition_0_3"}>
                <img alt='language' src={`/assets/img/${valueRU.toLowerCase()}.svg`}></img>
                <p>{valueRU}</p>
            </div>
            <div onClick={() => {handleClick(), OpenChoose(choose)}} className={props.className + " d-flex pos-absolute items-center cursor-pointer transition_0_3 " + props.class + " " + (choose ? props.addClass : "")}>
                <img alt='language' src={`/assets/img/${valueEN.toLowerCase()}.svg`}></img>
                <p>{valueEN}</p>     
            </div>
        </div>
    )
}

export default ChooseLanguage;