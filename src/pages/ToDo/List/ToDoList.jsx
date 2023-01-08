import React, { useState } from 'react';
import t from "../ToDo.module.css";
import delLogo from "../../../images/delete-icon-18-128.png"
import editLogo from '../../../images/edit-128.png'
import completeLogo from '../../../images/arrow-204-128.png'

const ToDoList = ({ todo, setTodo }) => {
    const [edit, setEdit] = useState('')
    const [value, setValue] = useState('')
    function saveToDo(id) {
        setEdit('')
        let newToDo = [...todo].map(item => {
            if (item.id == id) {
                item.title = value
            }
            return item
        })
        setTodo(newToDo)
    }
    function deleteToDo(id) {
        let newToDo = [...todo].filter(item => item.id != id)
        setTodo(newToDo)
    }
    function editToDo(id, title) {
        setEdit(id)
        setValue(title)
    }
    function completeToDo(id) {
        let newToDo = [...todo].filter(item => {
            if (item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newToDo)
        console.log(todo)
    }
    return (
        <div className={t.list}>
            {
                todo.map(item => (
                    <div>
                        {
                            edit == item.id ?
                                <div className={t.activeTask}>
                                    <textarea value={value} onChange={(e) => setValue(e.target.value)} className={t.input}></textarea>
                                    <div className={t.btnContainer}>
                                        <button onClick={() => saveToDo(item.id)} className={t.taskButton}>
                                            <img src={completeLogo} />
                                        </button>
                                    </div>
                                </div> :
                                <div className={t.task}>
                                    <div className={item.status ? t.text : t.completeText}>
                                        {item.title}
                                    </div>
                                    <div className={t.btnContainer}>
                                        <button onClick={() => completeToDo(item.id)} className={t.taskButton}>
                                            <img src={completeLogo} />
                                        </button>
                                        <button onClick={() => deleteToDo(item.id)} className={t.taskButton}>
                                            <img src={delLogo} />
                                        </button>
                                        <button onClick={() => editToDo(item.id, item.title)} className={t.taskButton}>
                                            <img src={editLogo} />
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
