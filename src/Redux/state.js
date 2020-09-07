let store={
    _state:{
        profilePage:{
            posts: [
                {id: 1, message: 'Hi.How are you?', likesCount: 15},
                {id: 2, message: 'Its my first post', likesCount: 126},

            ],
                newPostText: 'it-kamasutra.com'
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
            ]
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
        if (action.type === 'ADD-POST'){
            let newPost={
                id:3,
                message:this._state.profilePage.newPostText,
                likesCount:0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText=action.newText;
            this._callSubscriber(this._state);
        }
    },



};

export default store;

