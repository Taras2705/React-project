import React from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            <div>
                <textarea className={s.newPost} placeholder="new post">

                </textarea>
                <div>
                    <button className={s.button}>Add Post</button>
                    <button className={s.button}>Delete post</button>
                </div>
            </div>
            <div >
                <Post message='Hi.How are you?' likeCount='15'/>
                <Post message='Its my first post' likeCount='126'/>
            </div>
        </div>


    )


};
export default MyPosts;
