import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className="header">
                <img
                    src='https://www.pngmart.com/files/13/Akatsuki-Logo-PNG-Pic.png'>
                </img>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src='https://png.pngtree.com/thumb_back/fh260/back_our/20190617/ourmid/pngtree-chinese-style-traditional-beijing-opera-mask-background-material-image_126730.jpg'></img>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>New post</div>
                </div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    );
}

export default App;
