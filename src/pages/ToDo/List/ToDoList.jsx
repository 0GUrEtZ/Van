import React, { useState } from 'react';
import t from "../ToDo.module.css";
import delLogo from "../../../images/delete-icon-18-128.png"
import editLogo from '../../../images/edit-128.png'
import completeLogo from '../../../images/arrow-204-128.png'
import saveLogo from '../../../images/save-as-128.png'
import crossLogo from '../../../images/x-mark-128.png'

const ToDoList = ({ todo, setTodo }) => {
    const [edit, setEdit] = useState('')
    const [value, setValue] = useState('')
    function saveToDo(id) {
        setEdit('')
        let newToDo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newToDo)
    }
    const deleteToDo = (id) => {

        setTodo(todo.filter(item => item.id !== id))
    }
    const editToDo = (id, title) => {
        setEdit(id)
        setValue(title)
    }
    const completeToDo = (id) => {
        // console.log(todo.filter(item => item.id === id ? item.status : ))
        // setTodo(todo.filter(item => item.id === id ? { ...item, status: !item.status } : item.status))
        console.log(todo.filter()) 
    }
    console.log(todo)
    return (
        <div className={t.list}>
            {
                todo.map(item => (
                    <div>
                        {
                            edit === item.id ?
                                <div className={t.activeTask}>
                                    <textarea value={value} onChange={(e) => setValue(e.target.value)} className={t.input}></textarea>
                                    <div className={t.btnContainer}>
                                        <button onClick={() => saveToDo(item.id)} className={t.taskButton}>
                                            <img src={saveLogo} alt='dsg' />
                                        </button>
                                    </div>
                                </div> :
                                <div className={t.task}>
                                    <div className={item.status ? t.text : t.completeText}>
                                        {item.title}
                                    </div>
                                    <div className={t.btnContainer}>
                                        <button onClick={() => completeToDo(item.id)} className={t.taskButton}>
                                            <img src={item.status ? completeLogo : crossLogo} alt='asdfadg' />
                                        </button>
                                        <button onClick={() => deleteToDo(item.id)} className={t.taskButton}>
                                            <img src={delLogo} alt='sdagdag' />
                                        </button>
                                        <button onClick={() => editToDo(item.id, item.title)} className={t.taskButton}>
                                            <img src={editLogo} alt='dagda' />
                                        </button>
                                    </div>
                                </div>
                        }
                    </div>
                ))
            }
        </div >
    )
};
export default ToDoList
