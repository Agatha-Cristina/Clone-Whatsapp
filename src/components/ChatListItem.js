import React from 'react';
import './ChatListItem.css';

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Agatha</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Opa, tudo bem?</p>
                    </div>
                
                </div>
            </div>
        </div>
        
    );
}
/*
https://images.emojiterra.com/google/android-10/512px/1f9d0.png
https://www.w3schools.com/howto/img_avatar2.png
https://cdn2.vectorstock.com/i/thumbs/98/11/girl-icon-flat-single-avatarpeaople-icon-from-vector-14449811.jpg
*/