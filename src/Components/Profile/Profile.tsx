import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img
                src='https://png.pngtree.com/thumb_back/fh260/background/20210115/pngtree-original-line-lattice-six-background-abstract-pixel-rain-image_523661.jpg'></img>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;