import React from "react";
import c from "./chat.module.css";

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

export default Chat;