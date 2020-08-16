import React from "react";
import s from "./Post.module.css";

const Post = () => {
    return (

        <div className={s.item}>
            <img className={s.avatar}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8NA_LyWvbM2RqvhFLQqJ3q8ti6f2WO2zD7w&usqp=CAU"
                 alt=""/>
            post 1
            <div><button className={s.button}><img className={s.like} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Twemoji_2764.svg/600px-Twemoji_2764.svg.png" alt=""/></button><span>15</span>
        </div>
        </div>

    )


};
export default Post;
