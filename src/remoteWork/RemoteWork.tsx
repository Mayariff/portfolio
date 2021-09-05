import React from 'react';
import style from "../common/styles/Container.module.css"
import s from "./RemoteWork.module.css"
import Button from "../button/Button";

const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={style.container}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                    <Button title={"Нажать меня"} type={"button"} name={"remoteWork"}/>
            </div>
        </div>
    );
};

export default RemoteWork;