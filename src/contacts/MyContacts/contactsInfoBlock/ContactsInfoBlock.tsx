import React from 'react';
import s from "./ContactsInfoBlock.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactsInfoBlock = (props: any) => {
    return (
        <div className={s.singleAdress}>
            <h6>
                <span>
                    <FontAwesomeIcon
                    icon={props.icon}
                    className={`fa-1x`}
                    fixedWidth={true}
                    />
                </span>
                {props.nameAdressBlock}:</h6>
            <span> {props.contactDetails}</span>
        </div>
    );
};
export default ContactsInfoBlock;