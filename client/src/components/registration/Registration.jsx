import React from "react";
import './registration.css'

const Registration = () => {
    return (
        <div className="registration">
            <div className="registration_header">Регистрация</div>
            <Input type="text" placeholder="Введите email..."/>
            <Input type="password" placeholder="Введите пароль"/>
            <button className="registration_btn">Войти</button>
        </div>
    );
};

export default Registration;