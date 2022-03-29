import React from 'react';
import s from "./ContactsInfoBlock.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export type contactsType={
    icon: IconProp
    nameAddressBlock: string
    contactDetails: string
    id?:string
}

const ContactsInfoBlock = (props: contactsType) => {
    return (
        <div className={s.singleAddress}>
            <h6>
                <span>
                    <FontAwesomeIcon
                    icon={props.icon}
                    className={`fa-1x`}
                    fixedWidth={true}
                    />
                </span>
                {props.nameAddressBlock}:</h6>
            <span> {props.contactDetails}</span>
        </div>
    );
};
export default ContactsInfoBlock;