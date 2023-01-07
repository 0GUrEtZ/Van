import React, { useState } from 'react';
import t from "./ToDo.module.css";
import delLogo from "../../images/delete-icon-18-128.png"
import editLogo from '../../images/edit-128.png'
import ToDoList from './List/ToDoList';
import AddToDo from './Add/AddToDo';

const ToDo = () => {
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, placeat!',
            status: true
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, placeat!',
            status: true
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, placeat!',
            status: false
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, placeat!',
            status: true
        },
        {
            id: 5,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, placeat!',
            status: true
        },
        {
            id: 6,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, placeat!',
            status: false
        },
        {
            id: 7,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, placeat!',
            status: true
        },
        {
            id: 8,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, placeat!',
            status: true
        },
        {
            id: 9,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, placeat!',
            status: false
        }
    ])
    return (
        <div className={t.wrapper}>
            <div className={t.todo}>
                <ToDoList todo={todo} setTodo={setTodo} />
                <AddToDo />
            </div>
        </div>
    )
};
export default ToDo
