import { useState } from 'react';
import styles from '/public/assets/css/PurpleBlocks.module.css'

const BlockForQuestion = (props) => {

    const [openAnswer, open_openAnswer] = useState(false);

    const OpenAnswer = (openAnswer) => {
        open_openAnswer(!openAnswer);
    };

    return (
        <div onClick={() => OpenAnswer(openAnswer)} className={styles['for-question'] + " cursor-pointer border-7px transition_0_3 " + (openAnswer ? styles.open : "")}>
            <div className='d-flex items-center'>
                <span>{props.number}</span>
                <h3>{props.question}</h3>
                <img className='transition_0_3' alt='arrow' src='/assets/img/arrow.svg'></img>
            </div>
            <div className='d-flex'>
                <span className={styles.margin}>{props.number}</span>
                <p className={styles.hidden + " transition_0_3"}>{props.children}</p>
            </div>
        </div>
    )
}

export default BlockForQuestion;