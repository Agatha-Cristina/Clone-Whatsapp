import React from 'react';
import './ChatWindow.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default () => {
    return (
        <div className="chatWindow">
            <div className="chatWindow--header">

                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://cdn2.vectorstock.com/i/thumbs/98/11/girl-icon-flat-single-avatarpeaople-icon-from-vector-14449811.jpg" alt="" />
                    <div className="chatWindow--name">Agatha Cristina</div>
                </div>

                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow-btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow-btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow-btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>
                   
                </div>

                
            </div>
            <div className="chatWindow--body"></div>

            <div className="chatWindow--footer">

            </div>
        </div>
    );
}
