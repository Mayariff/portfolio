import React from 'react';
import s from "./Skill.module.css"


const Skill = (props:any) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}> </div>
            <h3>{props.title}</h3>
            <span className={s.discription}>
                {props.discription}
            </span>
        </div>

    );
};

export default Skill;