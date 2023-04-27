import React from 'react';
import style from './Post.module.css'

export type propsPost = {
    message: string;
    like: number;
}

const Post = (props: propsPost) => {
    return <div className={style.item}>
        <img src='https://kartinkin.net/uploads/posts/2021-10/1633783936_10-kartinkin-net-p-utka-piksel-art-krasivo-10.png'/>
        {props.message}
        <div>
            <span>Like</span> {props.like}
        </div>
    </div>
}

export default Post;