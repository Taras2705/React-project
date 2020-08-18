import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

        let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
        let messageElements = props.messages.map(m => <MessageItem message={m.message}/>);
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
