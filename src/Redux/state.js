import {rerenderEntireTree} from "../render";

let state = {
    profilePage:{
        posts: [
            {id: 1, message: 'Hi.How are you?', likesCount: 15},
            {id: 2, message: 'Its my first post', likesCount: 126},

        ],
        newPostText:'it-kamasutra.com'
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
    }
};
export let addPost=()=>{
    let newPost={
        id:3,
        message:state.profilePage.newPostText,
        likesCount:0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);

};
export let updateNewPostText=(newText)=>{
    debugger;
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);

};

export default state;

