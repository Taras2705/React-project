import React from "react";
import s from "./NewPost.module.css";


const NewPost=()=>{
    let newPostElement= React.createRef()
    let addPost=()=>{
       let text=newPostElement.current.value;
       alert(text)
    };
    return(
        <div>
                <textarea ref={newPostElement}  className={s.newPost} placeholder="new post">
                </textarea>
            <div>
                <button onClick={addPost} className={s.button}>Add Post</button>
                <button className={s.button}>Delete post</button>
            </div>
        </div>

    )
};
export default NewPost;
