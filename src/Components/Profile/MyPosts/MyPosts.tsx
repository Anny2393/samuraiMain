import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <Post/>
            <Post/>
            <Post/>
        </div>
        <div className={style.posts}>

        </div>
    </div>
}

export default MyPosts;