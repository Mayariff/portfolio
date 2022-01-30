import React, {useState} from 'react';
import s from "./BurgerNav.module.scss"


const BurgerNav = () => {

    const[openMenu, setOpenMenu]= useState(false)
    const onclickHandler=()=> setOpenMenu(!openMenu)

    return (
            <div className={s.burgerNav} >
                <div className={openMenu ? `${s.burgerNavItems} ${s.show}`: s.burgerNavItems} >
                    <a href="#main" className={s.navLink}>Главная</a>
                    <a href="#skills" className={s.navLink}>Скиллы</a>
                    <a href="#projects" className={s.navLink}>Проекты</a>
                    <a href="#contacts" className={s.navLink}>Контакты</a>
                </div>
                <div className={openMenu ? `${s.burgerBtm} ${s.openMenu}`:s.burgerBtm} onClick={onclickHandler} >
                    <span></span>
                </div>
            </div>
    );
};

export default BurgerNav;