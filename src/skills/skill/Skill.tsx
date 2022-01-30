import React  from 'react';
import s from "./Skill.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Skill = (props:any) => {

    return (
        <div className={s.skill}>

            <div className={s.icon}>
            <FontAwesomeIcon icon={props.iconName}  className={`fa-6x`} fixedWidth={true} />
            </div>
            <h6>{props.title}</h6>
            <span className={s.discription}>
                {props.discription}
            </span>
        </div>

    );
};

export default Skill;