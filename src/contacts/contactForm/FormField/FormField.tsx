import React from 'react';
import s from "./FormField.module.scss";

export const FormField = (props:any) => {
    return (
        <div className={s.contactField}>
            <input className={s.fieldStyle}
                 type={props.fieldType}
                   name={props.name}
                   id={props.name}
                   required={props.required}
                   autoFocus={true}
                   placeholder={props.name}/>
        </div>
    );
};
export const FormTextAria= (props:any) => {
    return (
        <div className={s.contactField}>
            <textarea className={s.fieldStyle}
                     name={props.name}
                      id={props.name}
                      autoFocus={true}
                      placeholder={props.name}
                      rows={10} cols={30}
                      required={true}>
               {props.name}
            </textarea>
        </div>
    );
};


export default FormField;