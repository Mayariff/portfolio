import React from 'react';
import s from "./Main.module.css"
import style from "../common/styles/Container.module.css"

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={style.container+ " "+ s.mainContainer}>
                    <div className={s.text}>
                        <span> Hi There</span>
                        <h1>I am Jeffery Aaron</h1>
                        <p>Frontend developer</p>
                    </div>
                    <div className={s.photo}> </div>
            </div>
        </div>
    );
};

export default Main;