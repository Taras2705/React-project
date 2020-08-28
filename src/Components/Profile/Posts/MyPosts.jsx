import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);
    return (
        <div>
            <NewPost addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    )


};
export default MyPosts;
