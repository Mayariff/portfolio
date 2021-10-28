import React from 'react';
import s from "./Progect.module.scss"
import {Button} from "../../common/button/Button";



const Project = (props: any) => {
    let title = `${props.title} / `
    const  image= {
        backgroundImage: `url(${props.image})`
    }

    return (
        <div className={s.project}>
            <div className={s.projectImage} style={image} >
            </div>
            <div className={s.textAboutProject}>
                <a className={s.button}>Смотреть</a>
                <div className={s.titleBlock}>
                <span className={s.projectTitle}>{title}</span>
                <span className={s.projectTechnology}>{props.technology}</span>
                </div>
                <div className={s.projectDescription}>{props.discription}</div>
                <Button href={'#'} title={"Click me"}/>
            </div>
        </div>
    );
};

export default Project;