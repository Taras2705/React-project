import React from "react";
import MyPosts from "./Posts/NewPost/MyPosts";
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={s.content}>
            <img className={s.contentImg} alt=""
                 src="https://bk.asia-city.com/sites/default/files/u143592/webp.net-compress-image_38_0.jpg"/>
             <MyPosts/>
        </div>

    )
};
export default Profile;
