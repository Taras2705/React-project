import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {
        let newMessage=React.createRef();
        let sentMessage=()=>{
            let message=newMessage.current.value;
            alert(message)

        };
        let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
        let messageElements = props.state.messages.map(m => <MessageItem message={m.message}/>);
        return (
            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                    <div>
                        <textarea ref={newMessage} className={s.messageTo}></textarea>
                    </div>
                    <div className={s.buttons}>
                        <button onClick={sentMessage} className={s.sent}>Sent message</button>
                        <button className={s.sent}>Attache folder</button>
                    </div>
                </div>

            </div>
        )
    }
;
export default Dialogs;
