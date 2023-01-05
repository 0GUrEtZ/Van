import React from 'react';
import m from './content-wrap.module.css';
import Posts from '../../pages/posts/posts';
import Dialogs from '../../pages/dialogs/dialogs';
import Summary from '../../pages/summary/summary'
import { Route, Routes } from 'react-router-dom';
import Counter from 'pages/counter/Counter';

const Content = (props) => {

  return (
    <div className={m.wrapper}>
      <Routes>
        <Route path='/' element={<Summary />} />
        <Route path='dialogs/*' element={<Dialogs />} />
        <Route path='posts' element={<Posts />} />
        <Route path='counter' element={<Counter />} />
      </Routes>
    </div>
  );
}

export default Content;
