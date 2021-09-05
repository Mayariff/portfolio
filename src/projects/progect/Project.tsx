import React from 'react';
import s from "./Progect.module.css"

const Project = (props: any) => {
    return (
        <div className={s.project}>
            <div className={s.projectImage}>
                <a className={s.button}>Смотреть</a>
            </div>
            <div className={s.textAboutProject}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.projectDescription}>{props.discription}</span>
            </div>
        </div>
    );
};

export default Project;