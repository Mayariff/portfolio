import React  from 'react';
import s from "./Skill.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export type SkillType ={
    id?: string
    title : string
    description: string
    iconName: IconProp
}

const Skill = (props:SkillType) => {

    return (
        <div className={s.skill}>
            <div className={s.icon}>
            <FontAwesomeIcon icon={props.iconName}  className={`fa-6x`} fixedWidth={true} />
            </div>
            <h6>{props.title}</h6>
            <span className={s.description}>
                {props.description}
            </span>
        </div>

    );
};

export default Skill;