import React from 'react';
import style from './Post.module.css'

export type propsPost = {
    message: string;
    like: number;
}

const Post = (props: propsPost) => {
    return <div className={style.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/4500/4500180.png'/>
        {props.message}
        <div>
            <span>Like</span> {props.like}
        </div>
    </div>
}

export default Post;