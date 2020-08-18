import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}
            </NavLink>
        </div>
    )
};
const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {
    let DialogsData = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Petro'},
        {id: 3, name: 'Oleksandr'},
        {id: 4, name: 'Taras'}
    ];
    let MessageData=[
        {id: 1,message: 'Hi hi'},
        {id: 2, message: 'Hi how are you?'},
        {id: 3, message: 'Hi.Nice to meet you'},

    ];
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>

            </div>
            <div className={s.messages}>
                <MessageItem message={MessageData[0].message}/>
                <MessageItem message={MessageData[1].message}/>
                <MessageItem message={MessageData[2].message}/>
                <div>
                    <textarea className={s.messageTo}></textarea>
                </div>
                <div className={s.buttons}>
                    <button className={s.sent}>Sent message</button>
                    <button className={s.sent}>Attache folder</button>
                </div>
            </div>

        </div>
    )
}
    ;
    export default Dialogs;
