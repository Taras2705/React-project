const Update_New_Message_Body = 'UPDATE-NEW-MESSAGE-BODY';
const Send_Message='SEND-MESSAGE';


let initialState={
    dialogs : [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Petro'},
        {id: 3, name: 'Oleksandr'},
        {id: 4, name: 'Taras'},
        {id: 4, name: 'Stepan'}
    ],
    messages :[
        {id: 1, message: 'Hi hi'},
        {id: 2, message: 'Hi how are you?'},
        {id: 3, message: 'Hi.Nice to meet you'},
    ],
    newMassageBody:'',
};
const dialogsReducer=(state=initialState,action)=>{
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
