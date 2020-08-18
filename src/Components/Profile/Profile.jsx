import React from "react";
import MyPosts from "./Posts/MyPosts";
import s from "./Profile.module.css"
import ContentImg from "./ContentImg/ContnentImg";

const Profile = (props) => {
    return (
        <div className={s.content}>
             <ContentImg/>
             <MyPosts posts={props.state.posts}/>
        </div>

    )
};
export default Profile;
