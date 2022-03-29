import React, {useState} from 'react';
import {Button} from '../../common/button/Button';
import s from "./ContactForm.module.scss";
import style from './FormField.module.scss'
import {useFormik} from "formik";
import axios from "axios";


type FormValuesType = {
    email: string
    name: string
    subject: string
    message: string
}
type messageSendType = 'idle' | 'beSend' | 'notSend' | 'inProgress'
const ContactForm = () => {

    const [messageSend, setMessageSend] = useState<messageSendType>('idle')


    let formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            subject: '',
            message: ''

        },
        validate: (values) => {
            const errors: Partial<FormValuesType> = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            } else if (values.message.length > 701) {
                errors.message = 'Maximum 700 characters'
            } else if (!values.message) {
                errors.message = 'Required';
            }
            return errors
        },

        onSubmit: async (values: FormValuesType) => {
            setMessageSend('inProgress')

            axios.post('https://serveremailfromportfolio.herokuapp.com/sendMessage', values)
                .then(() => {
                    setMessageSend('beSend')
                    formik.resetForm()
                    setTimeout(() => {
                        setMessageSend('idle')
                    }, 4000)
                })
                .catch(() => {
                    setMessageSend('notSend')
                    setTimeout(() => {
                        setMessageSend('idle')
                    }, 15000)
                })
        }

    })


    return (
        <form onSubmit={formik.handleSubmit}
              className={s.contactForm}>

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
                {(formik.touched.email && formik.errors.email) ?
                    <div className={s.error}>{formik.errors.email}</div> : null}
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
                {(formik.touched.message && formik.errors.message) ?
                    <div className={s.error}>{formik.errors.message}</div> : null}
            </label>

            <div className={s.sector}>
                <Button title={"send message"} type={'submit'}/>
                <p className={messageSend !== 'idle' ? s.formSuccess : s.hide}>
                    {messageSend === 'inProgress' && <span>Please, wait </span>}
                    {messageSend === 'beSend' && <span> Thank You! Your message has been sent! </span>
                    }
                    {messageSend === 'notSend' &&
                        <span> Sorry, email not be sent. Let's chat on <a href={'https://t.me/MayaRiff'}
                                                                          target={'_blank'} className={s.link}>telegram</a></span>
                    }
                </p>
            </div>
        </form>
    );
};

export default ContactForm;