import React from 'react';
import s from "./Skills.module.scss"
import style from "../common/styles/Container.module.scss"
import Skill from "./skill/Skill";
import TitleSector from "../common/TitleForSectors/TitleSector";
import {faCss3Alt, faReact} from "@fortawesome/free-brands-svg-icons";
import {faFileCode} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return (
        <div className={s.skillsBlock} id={`skills`}>
        <div className={style.container}>
            <TitleSector titleDiscription={"basic stack technologies"} title={'My skills'} />
                <div className={s.skills}>
                    <Skill title={" REACT"} iconName={faReact} discription={"tyutyu tyuyu tutryuty rhrvrglkj1"}/>
                    <Skill title={"HTML"} iconName={faFileCode} discription={"kgkhgjrlkj2"}/>
                    <Skill title={"CSS"} iconName={faCss3Alt} discription={"kgkhgjrlkj3"}/>
                </div>

            </div>
        </div>

    );
};

export default Skills;