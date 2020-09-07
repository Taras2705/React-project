import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);
    return (
        <div>
            <NewPost dispatch={props.dispatch} newPostText={props.newPostText}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    )


};
export default MyPosts;
