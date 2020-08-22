import React from "react";
import s from "./NewPost.module.css";


const NewPost=(props)=>{
    let newPostElement= React.createRef();

    let addPost=()=>{
        debugger;
       let text=newPostElement.current.value;
       props.addPost(text)
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
