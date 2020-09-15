import React, { useState, useEffect } from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

  const [chatlist, setChatList] = useState([
    {chatId: 1, title: 'Kendrick', image:'https://images.emojiterra.com/google/android-10/512px/1f9d0.png'}, 
    {chatId: 2, title: 'Arthur', image:'https://images.emojiterra.com/twitter/v13.0/512px/1f914.png'}, 
    {chatId: 3, title: 'Esqueci o nome!', image:'https://e7.pngegg.com/pngimages/631/881/png-clipart-emoticon-emoji-notebooks-emoticon-notebook-blank-composition-book-emoji-journal-emoji-notebooks-for-girls-matte-cover-emoji-school-supplies-emoji-stuff-blank-book-drawing-thumbnail.png'}, 
    {chatId: 4, title: 'Fulano de tal', image:'https://images.emojiterra.com/twitter/512px/1f60e.png'}, 
    {chatId: 5, title: 'Fulano de tal', image:'https://www.w3schools.com/howto/img_avatar2.png'}, 
    {chatId: 6, title: 'Fulano de tal', image:'https://www.w3schools.com/howto/img_avatar2.png'}, 
    {chatId: 7, title: 'Fulano de tal', image:'https://www.w3schools.com/howto/img_avatar2.png'}, 
    {chatId: 8, title: 'Fulano de tal', image:'https://www.w3schools.com/howto/img_avatar2.png'}, 
    {chatId: 9, title: 'Desconhecido', image:'https://www.w3schools.com/howto/img_avatar2.png'}, 
    {chatId: 10, title: 'Desconhecido', image:'https://www.w3schools.com/howto/img_avatar2.png'}, 
    {chatId: 11, title: 'Desconhecido', image:'https://www.w3schools.com/howto/img_avatar2.png'}, 
    {chatId: 12, title: 'Desconhecido', image:'https://www.w3schools.com/howto/img_avatar2.png'}, 
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">

        <header>

          <img className="header--avatar" src="https://cdn2.vectorstock.com/i/thumbs/98/11/girl-icon-flat-single-avatarpeaople-icon-from-vector-14449811.jpg" alt="" />
          <div className="header--buttons">

            <div className="header--btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>

            <div className="header--btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>

            <div className="header--btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>

        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId ===  chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>

      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow />
        }
        {activeChat.chatId === undefined &&       
          <ChatIntro />
        }
      </div>
    </div>
  );
}
//text git
