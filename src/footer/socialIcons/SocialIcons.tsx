import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import s from "./SocialIcons.module.scss";


const SocialIcon = (props: any) => {
    return (
        <a className={s.icon} href={props.link}>
            <FontAwesomeIcon icon={props.icon}  fixedWidth={true}  className={`fa-2x ${s.center}`}/>
        </a>
    );
};

export default SocialIcon;