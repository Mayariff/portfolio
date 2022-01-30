import React from 'react';
import s from "./Footer.module.scss"
import style from "../common/styles/Container.module.scss"
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import SocialIcon from "./socialIcons/SocialIcons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faVk } from '@fortawesome/free-brands-svg-icons';





const Footer = () => {
    return (
        <div className={s.footer}>

            <div className={style.container}>
                <div className={s.socialContainer}>
                    <SocialIcon link={'#'} icon={faLinkedinIn}/>
                    <SocialIcon link={'#'} icon={faInstagram}/>
                    <SocialIcon link={'#'} icon={faVk}/>
                </div>
                <span className={s.copyright} >&#169;2021 ALL RIGHTS RESERVED.</span>
            </div>
        </div>
    );
};

export default Footer;