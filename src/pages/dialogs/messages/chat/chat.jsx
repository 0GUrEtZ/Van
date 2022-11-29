import React from "react";
import c from "./chat.module.css";

const Chat = (props) => {
    return (
        <div className={c.wrapper}>
            <div className={c.header}>{props.name}</div>
            <div className={c.messages}>{props.message}</div>
            <div className={c.input}></div>
        </div>
    )
}

export default Chat;