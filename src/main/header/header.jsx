import React from 'react';
import h from './header.module.css';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => isActive ? (h.active) : '';

const Header = () => {
  return (
    <div className={h.nav}>
      <NavLink to='/' className={setActive} end><div className={h.button}>Summary</div></NavLink>
      <NavLink to='/posts' className={setActive}><div className={h.button}>Posts</div></NavLink>
      <NavLink to='/dialogs' className={setActive}><div className={h.button}>Dialogs</div></NavLink>
      <NavLink to='/todo' className={setActive} end><div className={h.button}>ToDo</div></NavLink>
    </div>
  );
}

export default Header;