import React from 'react';
import c from './chat-header.module.css';

const User = (props) => {

  return (
    <div className={c.name}>{props.name}</div>
  )
}

const Avatar = (props) => {

  return (
    <div className={c.avatar}>{props.avatar}</div>
  )
}

const ChatHeader = (props) => {
  return (
    <div className={c.wrap}>
      <User />
      <Avatar />
    </div>
  );
}

export default ChatHeader;