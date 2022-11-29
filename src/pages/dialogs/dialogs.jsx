import React from "react";
import d from "./dialogs.module.css"
import { TabTitle } from '../../utils/tab-title';
import DialogPreview from "./dialogpreview/dialogpreview";
import c from "./dialogpreview/dialogpreview.module.css";
import Chat from "./messages/chat/chat";

const Dialogs = (props) => {
    TabTitle('Dialogs');
    let route = "/" + props.id;
    return (
        <div className={d.wrap}>
            <div className={c.list}>
                <DialogPreview name="Ricardo Milos" id="1" message="Hi, how are you? I'm making human sacrifices. Let's meet at 5pm!" />
                <DialogPreview name="Dominic Toretto" id="2" message="Hi, how are you? I'm making human sacrifices. Let's meet at 5pm!" />
                <DialogPreview name="Tim Cock" id="3" message="Hi, how are you? I'm making human sacrifices. Let's meet at 5pm!" />
                <DialogPreview name="Billy Herrington" id="4" message="Hi, how are you? I'm making human sacrifices. Let's meet at 5pm!" />
                <DialogPreview name="Van Darkholme" id="5" message="Hi, how are you? I'm making human sacrifices. Let's meet at 5pm!" />
            </div>
            <Chat />
        </div>
    )
}

export default Dialogs;