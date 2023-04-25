import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={style.content}>
        <div>
            <img
                src='https://png.pngtree.com/thumb_back/fh260/back_our/20190617/ourmid/pngtree-chinese-style-traditional-beijing-opera-mask-background-material-image_126730.jpg'></img>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;