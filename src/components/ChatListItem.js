import React from 'react';
import './ChatListItem.css';

export default ({onClick, active, data}) => {
    return (
        <div 
            className={`chatListItem ${active?'active':''}`}
            onClick={onClick}
        >
            <img className="chatListItem--avatar" src={data.image} alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>A live vai ficar gravada?</p>
                    </div>
                
                </div>
            </div>
        </div>
        
    );
}
/*


https://images.emojiterra.com/twitter/v13.0/512px/1f914.png
https://e7.pngegg.com/pngimages/631/881/png-clipart-emoticon-emoji-notebooks-emoticon-notebook-blank-composition-book-emoji-journal-emoji-notebooks-for-girls-matte-cover-emoji-school-supplies-emoji-stuff-blank-book-drawing-thumbnail.png
https://e7.pngegg.com/pngimages/631/881/png-clipart-emoticon-emoji-notebooks-emoticon-notebook-blank-composition-book-emoji-journal-emoji-notebooks-for-girls-matte-cover-emoji-school-supplies-emoji-stuff-blank-book-drawing.png
https://images.emojiterra.com/twitter/512px/1f60e.png
https://i7.pngflow.com/pngimage/527/312/png-computer-icons-icon-design-user-web-user-icon-avatar-user-symbol-oval-clipart.png
https://images.emojiterra.com/google/android-10/512px/1f9d0.png
https://www.w3schools.com/howto/img_avatar2.png
https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png
https://cdn2.vectorstock.com/i/thumbs/98/11/girl-icon-flat-single-avatarpeaople-icon-from-vector-14449811.jpg
*/