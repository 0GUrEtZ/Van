import React, { useState } from 'react';
import t from "../ToDo.module.css";

const AddToDo = () => {
    return (
        <div className={t.interaction}>
            <textarea className={t.input}></textarea>
            <div className={t.buttons}>
                <button className={t.button}>
                    add
                </button>
            </div>
        </div>
    )
};
export default AddToDo
