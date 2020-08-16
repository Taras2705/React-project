import React from "react";
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={s.content}>
            <img className={s.contentImg} alt=""
                 src="https://bk.asia-city.com/sites/default/files/u143592/webp.net-compress-image_38_0.jpg"/>
            <div>
                <img className={s.icon}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8NA_LyWvbM2RqvhFLQqJ3q8ti6f2WO2zD7w&usqp=CAU"
                     alt=""/>
            </div>
            <div>my posts
            </div>
            <div>new post</div>
            <div className="posts">
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>

    )
};
export default Profile;
