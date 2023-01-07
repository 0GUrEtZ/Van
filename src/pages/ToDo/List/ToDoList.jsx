import React, { useState } from 'react';
import t from "../ToDo.module.css";
import delLogo from "../../../images/delete-icon-18-128.png"
import editLogo from '../../../images/edit-128.png'

const ToDoList = ({ todo, setTodo }) => {
    return (
        <div className={t.list}>
            {
                todo.map(item => (
                    <div className={t.task}>
                        <div className={t.text}>
                            {item.title}
                        </div>
                        <div>
                            <input type="checkbox" className={t.checkbox} />
                            <button className={t.taskButton}>
                                <img src={delLogo} />
                            </button>
                            <button className={t.taskButton}>
                                <img src={editLogo} />
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};
export default ToDoList
