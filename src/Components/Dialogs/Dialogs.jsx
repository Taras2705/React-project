import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to='/dialogs/1'>Ivan
                    </NavLink>
                    </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Petro
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Oleksandr
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Taras
                    </NavLink>
                </div>
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
