import React from "react";
import m from "./messages.module.css";
import c from "./chat/chat.module.css";
import h from "./chat/header/chat-header.module.css";
import i from "./chat/input/chat-input.module.css";
import { Route, Routes } from "react-router-dom";

const Message = (props) => {
    return (
        <div className={c.message}><p>{props.message}</p></div>
    )
}

const Chat = (props) => {
    return (
        <div className={c.wrap}>
            <Message />
        </div>
    )
}

let MessagesBlock = (props) => {
    return (
        <div className={m.wrap}>
            <ChatHeader />
            <Chat />
            <ChatInput />
        </div>
    )
}

const User = (props) => {

    return (
        <div className={c.name}>{props.name}</div>
    )
}

const Avatar = (props) => {

    return (
        <div className={h.avatar}>{props.avatar}</div>
    )
}

const ChatHeader = (props) => {
    return (
        <div className={h.wrap}>
            <User />
            <Avatar />
        </div>
    );
}

const ChatInput = () => {
    return (
        <div className={i.wrap}>
            <input type='text' className={i.input} />
        </div>
    );
}

const Messages = (props) => {
    let route = "/" + props.id;
    return (
        <Routes>
            <Route path={route} element={<MessagesBlock name="Ricardo Milos" id="1" />} />
            <Route path={route} element={<MessagesBlock />} />
            <Route path={route} element={<MessagesBlock />} />
            <Route path={route} element={<MessagesBlock />} />
            <Route path={route} element={<MessagesBlock />} />
        </Routes>
    )
}

export default Messages;