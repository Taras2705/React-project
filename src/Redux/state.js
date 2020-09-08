import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store={
    _state:{
        profilePage:{
            posts: [
                {id: 1, message: 'Hi.How are you?', likesCount: 15},
                {id: 2, message: 'Its my first post', likesCount: 126},

            ],
                newPostText: ''
        },
        dialogsPage:{
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
        }
    },
    _callSubscriber(){
        console.log('state changed')
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },

    dispatch(action){
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        this._callSubscriber(this._state);
        }

};




export default store;

