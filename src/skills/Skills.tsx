import React from 'react';
import s from "./Skills.module.scss"
import style from "../common/styles/Container.module.scss"
import Skill, {SkillType} from "./skill/Skill";
import TitleSector from "../common/TitleForSectors/TitleSector";
import {faCss3Alt, faReact} from "@fortawesome/free-brands-svg-icons";
import {faFileCode} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {

    const skills: Array<SkillType> = [
        {
            title: "REACT / REDUX",
            description: `React and Redux are one of the main stack for my projects. 
            I use React, TypeScript  and  Redux state management for creating SPA.`,
            iconName: faReact,
            id: '1'
        },
        {
            title: "HTML / JSX",
            description: `Use not only <div> and <span> for layout. In the main I use JSX.
            This is React extension, which allows us to write HTML in React.`,
            iconName: faFileCode,
            id: '2'
        },
        {
            title: "CSS / SCSS",
            description: `Have experience in adaptive layout, using the SASS pre-processor, 
            SCC, and MUI & ANT Design  libraries.`,
            iconName: faCss3Alt,
            id: '3'
        }
    ]

    return (
        <div className={s.skillsBlock} id={`skills`}>
            <div className={style.container}>
                <TitleSector titleDiscription={"basic stack technologies"} title={'My skills'}/>
                <div className={s.skills}>
                    {
                        skills.map(s => <Skill title={s.title}
                                               iconName={s.iconName}
                                               description={s.description}
                                               id={s.id} key={s.id}/>)
                    }

                </div>

            </div>
        </div>

    );
};

export default Skills;