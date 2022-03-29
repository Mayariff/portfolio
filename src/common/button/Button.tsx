import React from 'react';
import s from "./Button.module.scss"


type propsButtonType={
    type?: "button" | "submit" | "reset" | undefined
    title: string
    light?:boolean
    onClickHandler?:()=>void
    href?: string
}

export const Button = (props: propsButtonType) => {

    const clickHandler =()=>{props.onClickHandler&& props.onClickHandler()}
    return (
        <>
            {props.href?
                <a type={props.type}  href={props.href} target={'_blank'}
                        className={props.light? `${s.SimpleBTN} ${s.light}`:s.SimpleBTN} >
                    {props.title}
                </a>
            :<button type={props.type} value={props.title} name={"submitButton"}  onClick={clickHandler}
                    className={props.light? `${s.SimpleBTN} ${s.light}`:s.SimpleBTN} >
                {props.title}
            </button>
            }
        </>
    )
}
