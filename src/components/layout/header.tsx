import React from "react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <header>
            Page Header <br />
            <NavLink to='/'>Home</NavLink>
             |  
            <NavLink to='/solutions'>Solutions</NavLink>
             |  
            <NavLink to='/challenges'>Challenges</NavLink>
             | 
            <NavLink to='/resources'>Resources</NavLink>
             | 
            <NavLink to='/help'>Help</NavLink>
             | 
            <NavLink to='/signup'>Sign Up</NavLink>
             | 
            <NavLink to='/login'>Login</NavLink>
        </header>
    );
}