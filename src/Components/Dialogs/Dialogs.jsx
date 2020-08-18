import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem=(props)=>{
    let path='/dialogs/'+ props.id;
    return(
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}
            </NavLink>
        </div>
    )
};
const MessageItem=(props)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
};
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogItem name="Ivan" id="1" />
                <DialogItem name="Petro" id="2" />
                <DialogItem name="Oleksandr" id="3" />
                <DialogItem name="Taras" id="4" />

            </div>
            <div className={s.messages}>
               <MessageItem message='Hi hi'/>
               <MessageItem message='Hi how are you?'/>
               <MessageItem message='Hi.Nice to meet you'/>
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
};
export default Dialogs;
