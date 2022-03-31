import React from 'react';
import s from "./Footer.module.scss"
import style from "../common/styles/Container.module.scss"
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import SocialIcon from "./socialIcons/SocialIcons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faVk } from '@fortawesome/free-brands-svg-icons';
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";





const Footer = () => {
    return (
        <div className={s.footer}>

            <div className={style.container}>
                <div className={s.socialContainer}>
                    <SocialIcon link={'https://www.linkedin.com/in/mayariff/'} icon={faLinkedinIn}/>
                    <SocialIcon link={'https://www.instagram.com/mayyariff/'} icon={faInstagram}/>
                    <SocialIcon link={'https://vk.com/mayariff'} icon={faVk}/>
                    <SocialIcon link={'https://t.me/MayaRiff'} icon={faTelegram} />
                </div>
                <span className={s.copyright} >&#169;2021 ALL RIGHTS RESERVED.</span>
            </div>
        </div>
    );
};

export default Footer;