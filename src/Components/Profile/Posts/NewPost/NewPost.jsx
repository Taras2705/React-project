import React from "react";
import s from "./NewPost.module.css";


const NewPost=()=>{
    return(
        <div>
                <textarea className={s.newPost} placeholder="new post">
                </textarea>
            <div>
                <button className={s.button}>Add Post</button>
                <button className={s.button}>Delete post</button>
            </div>
        </div>

    )
};
export default NewPost;
