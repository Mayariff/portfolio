import React from 'react';
import s from './TitleSector.module.scss'




type propsType ={
    titleDiscription: string
    title: string
    light?: boolean
    id?:string
}

const TitleSector = (props: propsType) => {

    return (
        <div className={ props.light? `${s.sectionHeading} ${s.light}`:s.sectionHeading}>

            <h6>{props.titleDiscription}</h6>
            <h3>{props.title}</h3>
            <span>{props.title}</span>

        </div>
    );
};

export default TitleSector;