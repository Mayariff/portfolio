import React from 'react';
import s from "./Progect.module.scss"
import {Button} from "../../common/button/Button";

 export type projectType ={
    title: string
    technology: string
    demo?: string
    showCode?: string
    image?: string
    description: string
    id: string
}

const Project = (props: projectType) => {
    let title = `${props.title} // `
    const  image= {
        backgroundImage: `url(${props.image})`
    }

    return (
        <div className={s.project}>
            <div className={s.projectImage} style={image} >
            </div>
            <div className={s.textAboutProject}>
                <a className={s.button} href={props.demo} target={'_blank'}>show demo</a>
                <div className={s.titleBlock}>
                <span className={s.projectTitle}>{props.title} <span className={s.accent}>/</span>/ </span>
                <span className={s.projectTechnology}>{props.technology}</span>
                </div>
                <div className={s.projectDescription}>{props.description}</div>
                <Button  title={"Show Code"} href={props.showCode}/>
            </div>
        </div>
    );
};

export default Project;