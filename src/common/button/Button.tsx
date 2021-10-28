import React from 'react';
import s from "./Button.module.scss"

/*export const Button = (props: any) => {
    return (
        <>
            <a href={props.hrefValue} className={s.SimpleBTN}>{props.title}</a>
        </>)
};*/


export const Button = (props: any) => {
    return (
        <>
            <button type={props.type} value={props.title} name={"submitButton"}
                    className={props.light? `${s.SimpleBTN} ${s.light}`:s.SimpleBTN}>
                {props.title}</button>
        </>
    )
}
