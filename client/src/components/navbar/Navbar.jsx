import React from 'react';
import './navbar.css'
import Logo from '../../assets/img/navbar-logo.svg'
const Navbar = () => {
    return (
        <div className="navbar">
            <img src="{Logo}" alt="" className='navbar_logo' />
            <div className='navbar_header'>MERN CLOUD</div>
            <div className='navbar_login'>Войти</div>
            <div className='navbar_registration'>Регистрация</div>
        </div>
    );
};

export default Navbar;