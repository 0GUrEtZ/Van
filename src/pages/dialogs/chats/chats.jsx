import React from "react";
import c from "./chats.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => isActive ? (c.active) : '';

const User = (props) => {

    return (
        <div className={c.name}>{props.name}</div>
    )
}

const Message = (props) => {
    return (
        <div className={c.message}><p>{props.message}</p></div>
    )
}

const DialogPreview = (props) => {
    let trip = "/dialogs/" + props.id;
    return (
        <NavLink to={trip} className={setActive} >
            <div className={c.button}>
                <User name={props.name} />
                <Message message={props.message} />
            </div>
        </NavLink>
    )
}


export default DialogPreview;