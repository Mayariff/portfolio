import React from 'react';
import s from "./Header.module.css"
import Nav from "./nav/Nav";
import style from "../common/styles/Container.module.css"

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;