import React from 'react';
import s from "./Nav.module.scss"


const Nav = () => {
    return (
            <div className={s.nav} >
                <a href= '#main' className={s.navLink}>Main</a>
                <a href="#skills" className={s.navLink}>Skills</a>
                <a href="#projects" className={s.navLink}>Projects</a>
                <a href="#contacts" className={s.navLink}>Contacts</a>
                <a href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fb8TkBw1zgRFoFjdaJMu0Q6tXAcVTIDNwaQpzbYWAWdgCyU3F09RVbVPDbcCTuiIdq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=CV%20front-end%20DeviatkovaM.pdf" target={'_blank'} className={s.navLink}>CV</a>
            </div>
    );
};
export default Nav;