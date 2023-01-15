import React from 'react';
import m from './content-wrap.module.css';
import Dialogs from '../../pages/dialogs/dialogs';
import Summary from '../../pages/summary/summary'
import { Route, Routes } from 'react-router-dom';
import ToDo from 'pages/ToDo/ToDo';
import Shop from 'pages/Shop/Shop';

const Content = (props) => {

  return (
    <div className={m.wrapper}>
      <Routes>
        <Route path='/' element={<Summary />} />
        <Route path='dialogs/*' element={<Dialogs />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='todo' element={<ToDo />} />
      </Routes>
    </div>
  );
}

export default Content;
