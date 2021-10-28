import React from 'react';
import s from "./Projects.module.scss"
import style from "../common/styles/Container.module.scss"
import Project from "./progect/Project";
import TitleSector from "../common/TitleForSectors/TitleSector";
import sotialImg from '../assets/image/tbb.jpg'
import culcImg from '../assets/image/project-set.jpg'

const Projects = () => {
    return (
        <div className={s.projectsBlock} id={`projects`}>
            <div className={style.container}>
                <TitleSector titleDiscription={'My study projects'} title={"Projects"} />
                <div className={s.projects}>
                    <Project
                        image={sotialImg}
                        title={"Проект 1"}
                        technology={'React'}
                        discription={"okbmbom ordvdb fhbrgr rhrt "}/>
                    <Project
                        image ={culcImg}
                        title={"Проект 2"}
                        technology={'React'}
                        discription={"okbmbom orioborb sfvsvds"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;