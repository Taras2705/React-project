import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
    let posts = [
        {id: 1, message: 'Hi.How are you?', likesCount: 15},
        {id: 2, message: 'Its my first post', likesCount: 126},

    ];
    let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);
    return (
        <div>
            <NewPost/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    )


};
export default MyPosts;
