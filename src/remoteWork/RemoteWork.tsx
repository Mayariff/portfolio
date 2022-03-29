import React from 'react';
import style from "../common/styles/Container.module.scss"
import s from "./RemoteWork.module.scss"
import {Button} from "../common/button/Button";
import TitleSector from "../common/TitleForSectors/TitleSector";
import removeWork from "../assets/image/removeWork.jpg";


const RemoteWork = () => {
    const  removeImg= {
        backgroundImage: `url(${removeWork})`
    }
    return (
        <div className={s.remoteWorkBlock} style={removeImg} >
            <div className={style.container}>
                <TitleSector titleDiscription={'remote work is possible'} title={'remove work'} light={true}/>
                <p className={s.description}>
                    I would like to work remotely. If this is not possible, then I am ready for business trips to the office. We can discuss working conditions in Telegram.
                </p>
                <Button title={"Click telegram"}   light={true} href={'https://t.me/MayaRiff'}/>
            </div>
        </div>
    );
};

export default RemoteWork;