import React, { useState } from 'react';
import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user, chatlist, show, setShow}) => {
    const [list, setList] = useState([
        {id: 123, avatar: 'https://images.emojiterra.com/google/android-10/512px/1f9d0.png', name: 'Kendrick'},
        {id: 123, avatar: 'https://images.emojiterra.com/twitter/v13.0/512px/1f914.png', name: 'Arthur'},
        {id: 123, avatar: 'https://e7.pngegg.com/pngimages/631/881/png-clipart-emoticon-emoji-notebooks-emoticon-notebook-blank-composition-book-emoji-journal-emoji-notebooks-for-girls-matte-cover-emoji-school-supplies-emoji-stuff-blank-book-drawing-thumbnail.png', name: 'Esqueci o nome!'},
        {id: 123, avatar: 'https://images.emojiterra.com/twitter/512px/1f60e.png', name: 'Fulano de tal'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Desconhecido'}
    ]);

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="newChat" style={{left: show ? 0:-415}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                <ArrowBackIcon style={{color: '#FFFFFF'}} />
                </div>
                <div className="newChat--headtitle">Nova conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                            
                    </div>
                ))}
            </div>
        </div>
    );
}