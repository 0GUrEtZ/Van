import React, { useState } from 'react';
import t from "./ToDo.module.css";
import ToDoList from './List/ToDoList';
import AddToDo from './Add/AddToDo';

const ToDo = () => {
    const [todo, setTodo] = useState([

    ])
    return (
        <div className={t.wrapper}>
            <div className={t.todo}>
                <ToDoList todo={todo} setTodo={setTodo} />
                <AddToDo todo={todo} setTodo={setTodo} />
            </div>
        </div>
    )
};
export default ToDo
