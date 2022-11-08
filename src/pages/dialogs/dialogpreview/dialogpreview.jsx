import React from "react";
import d from "./dialogpreview.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => isActive ? (d.active) : '';

const User = (props) => {

    return (
        <div className={d.name}>{props.name}</div>
    )
}

const Message = (props) => {
    return (
        <div className={d.message}><p>{props.message}</p></div>
    )
}

const DialogPreview = (props) => {
    let trip = "/dialogs/" + props.id;
    return (
        <NavLink to={trip} className={setActive} >
            <div className={d.button}>
                <User name={props.name} />
                <Message message={props.message} />
            </div>
        </NavLink>
    )
}


export default DialogPreview;