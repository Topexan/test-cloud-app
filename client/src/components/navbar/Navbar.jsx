import React from 'react';
import './navbar.css'
import Logo from '../../assets/img/navbar-logo.svg'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className='container'>
            <img src="{Logo}" alt="" className='navbar_logo' />
            <div className='navbar_header'>MERN CLOUD</div>
            <div className='navbar_login'> <NavLink to="/login">Войти</NavLink></div>
            <div className='navbar_registration'> <NavLink to="/registration">Регистрация</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;