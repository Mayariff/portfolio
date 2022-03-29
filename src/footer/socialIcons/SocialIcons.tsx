import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import s from "./SocialIcons.module.scss";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type propsType={
    icon: IconProp
    link: string
}

const SocialIcon = (props: propsType) => {
    return (
        <a className={s.icon} href={props.link} target={'_blank'}>
            <FontAwesomeIcon icon={props.icon}  fixedWidth={true}  className={`fa-2x ${s.center}`}/>
        </a>
    );
};

export default SocialIcon;