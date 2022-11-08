import React from "react";
import c from "./chat.module.css";

const Chat = (props) => {
    return (
        <div className={c.wrapper}>
            <div>{props.name}</div>
        </div>
    )
}

export default Chat;