import React from "react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__link-container">
                    <img className="header__icon header__icon--skull" src="/src/assets/skull.png" />
                    <NavLink className="header__page-link" to='/'>Inicio</NavLink>
                </div>
                <div className="header__link-container">
                    <img className="header__icon" src="/src/assets/magic-wand.png" />
                    <NavLink className="header__page-link" to='/challenges'>Trucos</NavLink>
                </div>
                <div className="header__link-container">
                    <img className="header__icon" src="/src/assets/lollipop.png" />
                    <NavLink className="header__page-link" to='/resources'>Tratos</NavLink>
                </div>
                <div className="header__link-container">
                    <img className="header__icon" src="/src/assets/account.png" />
                    <NavLink className="header__page-link" to='/signup'>Registro</NavLink>
                </div>
                <div className="header__link-container">
                    <img className="header__icon" src="/src/assets/login.png" />
                    <NavLink className="header__page-link" to='/login'>Login</NavLink>
                </div>
            </div>
        </header>
    );
}