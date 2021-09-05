import React from 'react';
import s from "./Projects.module.css"
import style from "../common/styles/Container.module.css"
import Project from "./progect/Project";


const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={style.container}>
                <h2 className={style.title}>ПРОЕКТЫ</h2>
                <div className={s.projects}>
                    <Project title={"Проект 1"} discription={"okbmbom ordvdb fhbrgr rhrt "}/>
                    <Project title={"Проект 2"} discription={"okbmbom orioborb sfvsvds"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;