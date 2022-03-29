import React from 'react';
import s from "./MyContacts.module.scss";
import ContactsInfoBlock, {contactsType} from "./contactsInfoBlock/ContactsInfoBlock";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";

const MyContacts = () => {

    const contactData: Array<contactsType> = [
        {
            id: '11',
            icon: faMapMarkerAlt,
            nameAddressBlock: 'Address',
            contactDetails: '614000, Russia, Perm / 6004, Georgia, Batumi'
        },
        {
            id: '12',
            icon: faEnvelope,
            nameAddressBlock: 'Email',
            contactDetails: '79027972026@yandex.ru'
        },
        {
            id: '13',
            icon: faPhone,
            nameAddressBlock: 'Phone',
            contactDetails: `+7 902 797 20 26 / +9 955 7917 4489 `
        }
    ]

    return (

        <div className={s.contactDetales}>
            {contactData.map(c => <ContactsInfoBlock icon={c.icon}
                                                     nameAddressBlock={c.nameAddressBlock}
                                                     contactDetails={c.contactDetails}
                                                     id={c.id} key={c.id}/>)
            }

        </div>
    );
};

export default MyContacts;