import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export function Header() {

    const location = useLocation();
    const headerClass = location.pathname === '/' ? 'header--home' : 'header--default';

    return (
        <header className={`header ${headerClass}`}>
            <div className="header__container">
                <div className="header__link-container">
                    <NavLink to="/"><img className="header__icon header__icon--skull" src="/src/assets/skull.png" /></NavLink>
                    <NavLink className="header__page-link" to='/'>Inicio</NavLink>
                </div>
                <div className="header__link-container">
                    <NavLink to="/challenges"><img className="header__icon" src="/src/assets/magic-wand.png" /></NavLink>
                    <NavLink className="header__page-link" to='/challenges'>Trucos</NavLink>
                </div>
                <div className="header__link-container">
                    <NavLink to="/resources"><img className="header__icon" src="/src/assets/lollipop.png" /></NavLink>
                    <NavLink className="header__page-link" to='/resources'>Tratos</NavLink>
                </div>
                <div className="header__link-container">
                    <NavLink to="/help"><img className="header__icon" src="/src/assets/help.png" /></NavLink>
                    <NavLink className="header__page-link" to='/help'>Ayuda</NavLink>
                </div>
                <div className="header__link-container">
                    <NavLink to="/login"><img className="header__icon" src="/src/assets/login.png" /></NavLink>
                    <NavLink className="header__page-link" to='/login'>Login</NavLink>
                </div>
            </div>
        </header>
    );
}