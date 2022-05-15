import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';


const Nav = () => {
  
  return (
    <div className='div-navbar'>

    <NavLink to="/home" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>
      <img className='img-navbar' src='./icons/banco.png' alt='casita'/>
    </NavLink>

    <NavLink to="/about" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>
      <img className='img-navbar' src='./icons/pantalla.png' alt='about'/>
    </NavLink>

    <NavLink to="/projects" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>
      <img className='img-navbar' src='./icons/imagen.png' alt='about'/>
    </NavLink>

    <NavLink to="/contact" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>
      <img className='img-navbar' src='./icons/marcador.png' alt='contact'/>
    </NavLink>

  </div>
  )
}

export default Nav