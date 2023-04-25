import React from 'react';
import style from './Post.module.css'

const Post = () => {
    return <div className={style.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/4500/4500180.png'/>
        Post 1
        <div>
            <span>like</span>
        </div>
    </div>
}

export default Post;