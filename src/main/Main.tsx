import React from 'react';
import s from "./Main.module.scss"
import style from "../common/styles/Container.module.scss"
import avatarImage from "../assets/image/11.jpg"



const Main = () => {

    const  avatar= {
        backgroundImage: `url(${avatarImage})`
    }

    return (
        <div className={s.mainBlock} style = {avatar} id={`main`} >
            <div className={style.container+ " "+ s.mainContainer}>
                    <div className={s.text}>
                        <h6> Hello, I'm</h6>
                        <h1>Mayya<br/> Devyatkova</h1>
                        <h4>Frontend <br/> developer</h4>
                        <div className={s.textBTN}>
                            <a href={'contact'} className={s.BTN}>Contact me</a>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Main;