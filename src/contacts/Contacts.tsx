import React from 'react';
import style from "../common/styles/Container.module.scss"
import s from "./contact.module.scss"
import MyContacts from "./MyContacts/MyContacts";
import ContactForm from "./contactForm/ContactForm";
import TitleSector from "../common/TitleForSectors/TitleSector";


export const Contacts = () => {
    return (
        <div className={s.contactsContainer}>
            <div className={style.container} id={'contacts'}>
                <TitleSector titleDiscription={"Contact me"} title={"Contacts"} />
                <div className={s.formBlock}>
                    <MyContacts/>
                    <ContactForm/>
                </div>
        </div>
        </div>
    );
}