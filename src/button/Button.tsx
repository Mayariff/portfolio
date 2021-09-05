import React from 'react';
import s from "./Button.module.css"

const Button = (props: any) => {
    return (
        <>
            <input type={props.type} className={s.button} value={props.title} name={props.name} />
        </>
            )
}

export default Button;