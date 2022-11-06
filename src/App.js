import React from 'react';
import './App.css';
import Ftr from './main/footer/footer';
import Header from './main/header/header';
import { BrowserRouter } from 'react-router-dom';
import Content from './main/content-wrap/content-wrap';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Content />
        <Ftr />
      </div>
    </BrowserRouter>
  );
}

export default App;
