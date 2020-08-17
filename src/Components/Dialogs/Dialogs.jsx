import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={`${s.dialog} ${s.active}`}>Ivan</div>
                <div className={s.dialog}>Petro</div>
                <div className={s.dialog}>Oleksandr</div>
                <div className={s.dialog}>Taras</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi hi</div>
                <div className={s.message}>Hi how are you?</div>
                <div className={s.message}>Hi.Nice to meet you</div>
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
