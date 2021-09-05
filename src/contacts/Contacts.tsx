import React from 'react';
import style from "../common/styles/Container.module.css"
import Button from "../button/Button";
import s from "./contact.module.css"


const Contacts = () => {
    return (
        <div className={s.contactsContainer}>
            <div className={style.container}>
                <h3 className={style.title}>КОНТАКТЫ</h3>
                <form className={s.form} action={""} method={'post'} encType={"multipart/form-data"}>
                    <label><input type="text" name="name" required autoFocus={true} placeholder="Name"
                              className={s.formAria}/></label>
                    <label><input type="tel" name="tel" required placeholder="Telephone" className={s.formAria}/></label>
                    <label><input type="email" name="email" required placeholder="Email" className={s.formAria}/></label>
                    <label className={s.textAria}>
                        <textarea name="offer" rows={4} placeholder="About job offer" className={s.formAria}> </textarea></label>
                    <Button  type={"submit"} value={"Отправить"} name={"submitButton"} />
                </form>
            </div>
            
        </div>
    );
};

export default Contacts;