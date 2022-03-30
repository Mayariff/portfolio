import React from 'react';
import s from "./Nav.module.scss"


const Nav = () => {
    return (
            <div className={s.nav} >
                <a href= '#main' className={s.navLink}>Main</a>
                <a href="#skills" className={s.navLink}>Skills</a>
                <a href="#projects" className={s.navLink}>Projects</a>
                <a href="#contacts" className={s.navLink}>Contacts</a>
                <a href="https://disk.yandex.ru/d/AORU-LhZWYeETA" target={'_blank'} className={s.navLink}>CV</a>
            </div>
    );
};
export default Nav;