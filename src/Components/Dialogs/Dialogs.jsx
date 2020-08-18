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
    let dialogs = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Petro'},
        {id: 3, name: 'Oleksandr'},
        {id: 4, name: 'Taras'},
        {id: 4, name: 'Stepan'}
    ];
    let messages=[
        {id: 1,message: 'Hi hi'},
        {id: 2, message: 'Hi how are you?'},
        {id: 3, message: 'Hi.Nice to meet you'},

    ];
    let dialogsElements=dialogs.map(d=> <DialogItem name={d.name} id={d.id}/>);
    let messageElements=messages.map(m=> <MessageItem message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
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
