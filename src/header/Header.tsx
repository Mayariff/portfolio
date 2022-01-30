import React from 'react';
import s from "./Header.module.scss"
import Nav from "./nav/Nav";
import BurgerNav from "./BurgerNav/BurgerNav";




const Header = () => {

    return (
        <div className={s.header}>
            <div className={s.container} >
                <Nav/>
                <BurgerNav/>
            </div>
        </div>
    );
};

export default Header;

