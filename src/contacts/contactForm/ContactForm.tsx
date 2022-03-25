import React, {useState} from 'react';
import {Button} from '../../common/button/Button';
import s from "./ContactForm.module.scss";
import style from './FormField/FormField.module.scss'
import FormField, {FormTextAria} from "./FormField/FormField";
import {Field, Form, FormikHelpers, useFormik} from "formik";
import {Simulate} from "react-dom/test-utils";
import axios from "axios";



type FormValuesType = {
    email: string
    name: string
    subject: string
    message: string
}

const ContactForm = () => {

    const [messageSend, setMessageSend]= useState(false)


    let formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            subject:'',
            message:''

        },
        validate: (values) => {
            const errors: Partial<FormValuesType> = {};
            if (!values.email) {
                errors.email = 'Required';
            } else  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            else if (values.message.length >701) {
                errors.message = 'Maximum 700 characters'
            }
            else if (!values.message) {
                errors.message = 'Required';
            }
            return errors
        },
        onSubmit: async (values: FormValuesType) => {

            axios.post('https://serveremailfromportfolio.herokuapp.com/sendMessage', values).then(()=> console.log('Message be send'))
            setMessageSend(true)
            formik.resetForm()
            setTimeout(()=>{ setMessageSend(false)},4000)
        }
    })


    /*const formHandler:FormEventHandler<HTMLFormElement> =(e)=>{
        e.preventDefault()
        console.log(e.currentTarget.elements[0].id)*/

        //axios.post('http://localhost:3010/sendMessage').then(()=> console.log('Message be send'))
    //}

    return (
            <form onSubmit={formik.handleSubmit}
                className={s.contactForm}
                  //id="formElem"
                  //action={"mail.php"}
                  //method={'post'}
                  //encType={"multipart/form-data"}
            >


                <label className={style.contactField}>
                    <input className={style.fieldStyle}
                           autoFocus={true}
                           placeholder={'Name'}
                          {...formik.getFieldProps("name")}/>
                </label>
                <label className={style.contactField}>
                    <input className={style.fieldStyle}
                           required={true}
                           autoFocus={true}
                           placeholder={'Email'}
                           {...formik.getFieldProps("email")}/>
                    { (formik.touched.email && formik.errors.email) ?
                        <div className={s.error }>{formik.errors.email}</div>: null}
                </label>
                <label className={style.contactField}>
                    <input className={style.fieldStyle}
                           autoFocus={true}
                           placeholder={'Subject line'}
                           {...formik.getFieldProps("subject")}/>
                </label>
                <label className={style.contactField}>
                    <textarea className={style.fieldStyle}
                              autoFocus={true}
                              placeholder={'Enter your massage'}
                              rows={10} cols={30}
                           {...formik.getFieldProps("message")}
                    />
                    { (formik.touched.message && formik.errors.message) ?
                        <div className={s.error }>{formik.errors.message}</div>: null}
                </label>

                    <div className={s.sector}>
                        <Button title={"send message"} type={'submit'} />
                        <p className={messageSend? s.formSuccess: s.hide }> Thank You! Your message has been sent!</p>
                    </div>
            </form>
    );
};

export default ContactForm;