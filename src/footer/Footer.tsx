import React from 'react';
import s from "./Footer.module.css"
import style from "../common/styles/Container.module.css"

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={style.container}>
                <h2 className={style.title}>MayaRiff</h2>
                <div className={s.socialContainer}>
                    <a className={s.icon}></a>
                    <a className={s.icon}></a>
                    <a className={s.icon}></a>
                    <a className={s.icon}></a>
                </div>
                <span className={s.copyright} >&#169; 2021 Bce права защищены</span>
            </div>
        </div>
    );
};

export default Footer;