import React from 'react';
import s from "./MyContacts.module.scss";
import ContactsInfoBlock from "./contactsInfoBlock/ContactsInfoBlock";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";

const MyContacts = () => {
    return (

            <div className={s.contactDetales}>
                <ContactsInfoBlock
                    icon={faMapMarkerAlt}
                    nameAdressBlock={'Adress'}
                    contactDetails={'Loren'}
                />
                <ContactsInfoBlock
                    icon={faEnvelope}
                    nameAdressBlock={'Email'}
                    contactDetails={'Loren'}
                />
                <ContactsInfoBlock
                    icon={faPhone}
                    nameAdressBlock={'Phone'}
                    contactDetails={'Loren'}
                />
            </div>
    );
};

export default MyContacts;