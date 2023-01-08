import React, { useState } from 'react';
import ToDo from '../ToDo';
import t from "../ToDo.module.css";
import { v4 as uuidv4 } from 'uuid';

const AddToDo = ({ setTodo, todo }) => {
    const [value, setValue] = useState('')
    console.log(value)
    function add() {
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }

    return (
        <div className={t.interaction}>
            <textarea placeholder='To Do' value={value} onChange={(e) => setValue(e.target.value)} className={t.input}></textarea>
            <div className={t.buttons}>
                <button onClick={add} className={t.button}>
                    add
                </button>
            </div>
        </div>
    )
};
export default AddToDo
