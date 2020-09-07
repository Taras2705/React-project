import React from "react";
import s from "./NewPost.module.css";


const NewPost=(props)=>{
    let newPostElement= React.createRef();

    let addPost=()=>{
       let text=newPostElement.current.value;
       props.dispatch({type:'ADD-POST'});
    };
    let onPostChange=()=>{
        let text=newPostElement.current.value;
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText:text});

    };

    return(
        <div>
                <textarea ref={newPostElement} onChange={onPostChange}  className={s.newPost}  value={props.newPostText}/>
            <div>
                <button onClick={addPost} className={s.button}>Add Post</button>
                <button className={s.button}>Delete post</button>
            </div>
        </div>

    )
};
export default NewPost;
