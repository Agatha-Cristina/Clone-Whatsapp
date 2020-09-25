import React, { useState, useEffect, useRef } from 'react';
//import EmojisList from 'emojis-list';
//import EmojiRegex from 'emoji-regex';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import MessageItem from './MessageItem';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default ({user}) => {

    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author:123, body:'bla bla bla'},
        {author:123, body:'bla bla'},
        {author:1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author:123, body:'bla bla'},
        {author:1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author:123, body:'bla bla'},
        {author:1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author:123, body:'bla bla'},
        {author:1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author:123, body:'bla bla'},
        {author:1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author:123, body:'bla bla'},
        {author:1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author:123, body:'bla bla'},
        {author:1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author:123, body:'bla bla'},
        {author:1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author:123, body:'bla bla'},
        {author:1234, body:'bla bla bla bla'},
        {author:123, body:'bla bla bla'},
        {author:123, body:'bla bla'},
        {author:1234, body:'bla bla bla bla'},
    ]);

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [list]);

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji);
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleMicClick = () => {
        if(recognition !== null) {

            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript );
            }

            recognition.start();
        }
    }

    const handleSendClick = () => {

    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">

                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://cdn2.vectorstock.com/i/thumbs/98/11/girl-icon-flat-single-avatarpeaople-icon-from-vector-14449811.jpg" alt="" />
                    <div className="chatWindow--name">Agatha Cristina</div>
                </div>

                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{ color: '#919191' }} />
                    </div>

                </div>


            </div>
            <div ref={body} className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>

            <div
            className="chatWindow--emojiarea"
            style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick} 
                    disableSearchBar
                    disableSkinTonePicker 
                />
            </div>

            <div className="chatWindow--footer">

                <div className="chatWindow--pre">

                    <div
                        className="chatWindow--btn"
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen ? 40 : 0}}
                    >
                        <CloseIcon style={{ color: '#919191' }} />
                    </div>

                    <div
                        className="chatWindow--btn"
                        onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{ color: emojiOpen? '#009688':'#919191' }} />
                    </div>

                </div>
                <div className="chatWindow--inputarea">
                    <input
                        className="chatWindow--input"
                        type="text"
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />

                </div>
                <div className="chatWindow--pos">

                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWindow--btn">
                        <MicIcon style={{ color: listening ? '#126ECE' : '#919191' }} />
                        </div>
                    }

                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindow--btn">
                            <SendIcon style={{ color: '#919191' }} />
                        </div>
                    }

                </div>


            </div>
        </div>
    );
}
