const Update_New_Message_Body = 'UPDATE-NEW-MESSAGE-BODY';
const Send_Message='SEND-MESSAGE';
const dialogsReducer=(state,action)=>{
    switch (action.type) {
        case Update_New_Message_Body:
            state.newMassageBody=action.body;
            return state;
        case Send_Message:
            let body= state.newMassageBody;
            state.messages.push({id: 4, message: body});
            state.newMassageBody='';
            return state;
        default:return state;

    }

};
export const sendMessageCreator=()=>({type: Send_Message});
export const updateNewPostBodyCreator=(body)=>({
    type: Update_New_Message_Body, body: body
});
export default dialogsReducer;
