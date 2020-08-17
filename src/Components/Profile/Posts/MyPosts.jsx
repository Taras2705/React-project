import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
    return (
        <div>
           <NewPost/>
            <div  className={s.posts}>
                <Post message='Hi.How are you?' likeCount='15'/>
                <Post message='Its my first post' likeCount='126'/>
            </div>
        </div>


    )


};
export default MyPosts;
