import React from 'react';
import s from "./Skills.module.css"
import style from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
        <div className={style.container}>
                <h2 className={style.title}>СКИЛЛЫ</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} discription={"tyutyu tyuyu tutryuty rhrvrglkj1"}/>
                    <Skill title={"CSS"} discription={"kgkhgjrlkj2"}/>
                    <Skill title={"HTML"} discription={"kgkhgjrlkj3"}/>
                </div>

            </div>
        </div>

    );
};

export default Skills;