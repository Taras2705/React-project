import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
    let PostData = [
        {id: 1, message: 'Hi.How are you?', likesCount: 15},
        {id: 2, message: 'Its my first post', likesCount: 126},

    ]
    return (
        <div>
            <NewPost/>
            <div className={s.posts}>
                <Post message={PostData[0].message} likeCount={PostData[0].likesCount}/>
                <Post message={PostData[1].message} likeCount={PostData[1].likesCount}/>
            </div>
        </div>


    )


};
export default MyPosts;
