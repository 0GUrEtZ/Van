import React from 'react';
import c from './chat-input.module.css';

const ChatInput = () => {
  return (
    <div className={c.wrap}>
      <input type='text' className={c.input} />
    </div>
  );
}

export default ChatInput;