import React from 'react';
import s from "./Nav.module.scss"


const Nav = () => {
    return (
            <div className={s.nav} >
                <a href= '#main' className={s.navLink}>Главная</a>
                <a href="#skills" className={s.navLink}>Скиллы</a>
                <a href="#projects" className={s.navLink}>Проекты</a>
                <a href="#contacts" className={s.navLink}>Контакты</a>
            </div>
    );
};
export default Nav;