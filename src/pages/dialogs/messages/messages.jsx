import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./chat/chat";

const Messages = (props) => {
    let route = "/" + props.id;
    return (
        <Routes>
            <Route path={route} element={<Chat name="Ricardo Milos" id="1" />} />
            <Route path={route} element={<Chat name="Dominic Toretto" id="2" />} />
            <Route path={route} element={<Chat name="Tim Cock" id="3" />} />
            <Route path={route} element={<Chat name="Billy Herrington" id="4" />} />
            <Route path={route} element={<Chat name="Van Darkholme" id="5" />} />
        </Routes>
    )
}

export default Messages;