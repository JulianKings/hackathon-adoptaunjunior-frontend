import React, { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useApiSelector } from "../../redux/store";
import { selectSession } from "../../redux/slices/session";

export function Header() {

    const location = useLocation();
    const headerClass = location.pathname === '/' ? 'header--home' : 'header--default';
    const session = useApiSelector(selectSession);

    return (
        <header className={`header ${headerClass}`}>
            <div className="header__container">
                <div className="header__link-container">
                    <NavLink to="/"><img className="header__icon header__icon--skull" src="/assets/skull.png" /></NavLink>
                    <NavLink className="header__page-link" to='/'>Inicio</NavLink>
                </div>
                <div className="header__link-container">
                    <NavLink to="/challenges"><img className="header__icon" src="/assets/magic.svg" /></NavLink>
                    <NavLink className="header__page-link" to='/challenges'>Trucos</NavLink>
                </div>
                <div className="header__link-container">
                    <NavLink to="/resources"><img className="header__icon" src="/assets/lollipop.svg" /></NavLink>
                    <NavLink className="header__page-link" to='/resources'>Tratos</NavLink>
                </div>
                <div className="header__link-container">
                    <NavLink to="/help"><img className="header__icon" src="/assets/help.png" /></NavLink>
                    <NavLink className="header__page-link" to='/help'>Ayuda</NavLink>
                </div>
                {(session) ?
                    <Fragment>                        
                        <div className="header__link-container">
                            <NavLink to="/logout"><img className="header__icon" src="/assets/login.svg" /></NavLink>
                            <NavLink className="header__page-link" to='/login'>Logout</NavLink>
                        </div>
                    </Fragment> :
                    <Fragment>
                        <div className="header__link-container">
                            <NavLink to="/login"><img className="header__icon" src="/assets/login.svg" /></NavLink>
                            <NavLink className="header__page-link" to='/login'>Login</NavLink>
                        </div>
                    </Fragment>}
            </div>
        </header>
    );
}