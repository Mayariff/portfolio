import React from 'react';
import s from "./Nav.module.scss"


const Nav = () => {
    return (
            <div className={s.nav} >
                <a href= '#main' className={s.navLink}>Main</a>
                <a href="#skills" className={s.navLink}>Skills</a>
                <a href="#projects" className={s.navLink}>Projects</a>
                <a href="#contacts" className={s.navLink}>Contacts</a>
                <a href="https://docs.yandex.ru/docs/view?url=ya-disk%3A%2F%2F%2Fdisk%2FCV%2FCV%20Resume%2C%20front-end%20DeviatkovaM.pdf&name=CV%20Resume%2C%20front-end%20DeviatkovaM.pdf&uid=335947094&nosw=1" target={'_blank'} className={s.navLink}>CV</a>
            </div>
    );
};
export default Nav;