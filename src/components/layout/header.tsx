import React from "react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <header className="header">
            <div className="header__link-container">
                <img className="header__icon" src="/src/assets/skull.png" />
                <NavLink to='/'>Inicio</NavLink>
            </div>
             |  
            <NavLink to='/challenges'>Trucos</NavLink>
             | 
            <NavLink to='/resources'>Tratos</NavLink>
             | 
            <NavLink to='/signup'>Sign Up</NavLink>
             | 
            <NavLink to='/login'>Login</NavLink>
        </header>
    );
}