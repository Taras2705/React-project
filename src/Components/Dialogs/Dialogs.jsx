import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageCreator, updateNewPostBodyCreator} from "../../Redux/state";


const Dialogs = (props) => {

        let state=props.store.getState().dialogsPage;

        let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
        let messageElements = state.messages.map(m => <MessageItem message={m.message}/>);
        let newMessageBody = state.newMassageBody;

    let OnSentMessageClick=()=>{
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange=(e)=>{
        let body= e.target.value;
        props.store.dispatch(updateNewPostBodyCreator(body))
    };
        return (
            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange} className={s.messageTo}
                                  placeholder='Enter your message'/>
                    </div>
                    <div className={s.buttons}>
                        <button onClick={OnSentMessageClick} className={s.sent}>Send message</button>
                        <button className={s.sent}>Attache folder</button>
                    </div>
                </div>

            </div>
        )
    }
;
export default Dialogs;
