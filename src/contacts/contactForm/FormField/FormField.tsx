import { Field } from 'formik';
import React from 'react';
import s from "./FormField.module.scss";

export const FormField = (props:any) => {

    return (
        <label className={s.contactField} htmlFor={props.name} >
                <input className={s.fieldStyle}
                 type={props.type}
                   name={props.name}
                   id={props.name}
                   value={props.value}
                   required={props.required}
                   autoFocus={true}
                   placeholder={props.name}
                   onChange={props.handleChange}
                   onBlur={props.handleBlur}
            />
        </label>
    );
};
export const FormTextAria= (props:any) => {
    return (
        <div className={s.contactField}>
            <textarea className={s.fieldStyle}
                     name={props.name}
                      value={props.value}
                      id={props.name}
                      autoFocus={true}
                      placeholder={props.name}
                      rows={10} cols={30}
                      required={props.required}
            onChange={props.handleChange}>
               {props.value}
            </textarea>
        </div>
    );
};


export default FormField;