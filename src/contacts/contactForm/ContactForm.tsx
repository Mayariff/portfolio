import React from 'react';
import { Button } from '../../common/button/Button';
import s from "./ContactForm.module.scss";
import FormField, {FormTextAria} from "./FormField/FormField";



const ContactForm = () => {
    return (
            <form className={s.contactForm}
                  action={"mail.php"} method={'post'}
                  encType={"multipart/form-data"}>
                    <FormField type={"text"} name={"Email"} required={true}/>
                    <FormField type={"email"} name={"Name"} required={true}/>
                    <FormField type={"text"} name={"Subject"} required={false}/>
                    <FormTextAria name={"Message"}/>
                    <div className={s.sector}>
                        <Button title={"send message"} type={'submit'}/>
                        <p className={s.formSuccess}> Thank You! Your message has been sent!</p>
                    </div>
            </form>
    );
};

export default ContactForm;