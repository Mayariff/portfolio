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
                <TitleSector titleDiscription={'remote work is possible'} title={'Remove work'} light={true}/>
                    <Button title={"Click me"} type={"button"} name={"remoteWork"} light={true}/>
            </div>
        </div>
    );
};

export default RemoteWork;