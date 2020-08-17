import React from "react";
import MyPosts from "./Posts/MyPosts";
import s from "./Profile.module.css"
import ContentImg from "./ContentImg/ContnentImg";

const Profile = () => {
    return (
        <div className={s.content}>
             <ContentImg/>
             <MyPosts/>
        </div>

    )
};
export default Profile;
