const Add_Post = 'ADD-POST';
const Update_New_Post_Text = 'UPDATE-NEW-POST-TEXT';

let initialState={
    posts: [
        {id: 1, message: 'Hi.How are you?', likesCount: 15},
        {id: 2, message: 'Its my first post', likesCount: 126},

    ],
        newPostText: ''
};
const profileReducer=(state=initialState,action)=>{
    switch (action.type) {
        case Add_Post:
            let newPost={
                id:3,
                message:state.newPostText,
                likesCount:0
            };
            state.posts.push(newPost);
            state.newPostText='';
            return state;
        case Update_New_Post_Text:
            state.newPostText=action.newText;
            return state;
            default:
                return state


    }
 };
export const AddPostActionCreator=()=>({type: Add_Post});
export const UpdateNewPostTextActionCreator=(text)=>({
    type: Update_New_Post_Text, newText: text
});

export  default profileReducer;
