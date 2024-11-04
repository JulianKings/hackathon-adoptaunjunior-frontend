import React, { Fragment, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useApiSelector } from "../../redux/store";
import { selectSession } from "../../redux/slices/session";

export function Header() {

    const location = useLocation();
    const headerClass = location.pathname === '/' ? 'header--home' : 'header--default';
    const session = useApiSelector(selectSession);

    const getShadowClass = (path) => location.pathname === path ? 'shadow-active' : '';

    const handleHover = (event) => {
        const target = event.currentTarget as HTMLElement;
    
        if (!target.classList.contains('shadow-active')) {
            target.style.boxShadow = location.pathname === '/' ? 
                '0 4px 8px rgba(255, 255, 255, 0.6)' : 
                '0 4px 8px rgba(0, 0, 0, 0.6)';
        }
    };
    
    const handleHoverLeave = (event) => {
        const target = event.currentTarget as HTMLElement;
            event.currentTarget.style.boxShadow = 'inherit';
    };

    return (
        <header className={`header ${headerClass}`}>
            <div className="header__container">
                <div className={`header__link-container ${getShadowClass('/')}`} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                    <NavLink to="/">
                        <img className="header__icon header__icon--skull" src="/src/assets/skull.png" />
                    </NavLink>
                    <NavLink className="header__page-link" to='/'>Inicio</NavLink>
                </div>
                <div className={`header__link-container ${getShadowClass('/challenges')}`} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                    <NavLink to="/challenges">
                        <img className="header__icon" src="/public/assets/magic.svg" />
                    </NavLink>
                    <NavLink className="header__page-link" to='/challenges'>Trucos</NavLink>
                </div>
                <div className={`header__link-container ${getShadowClass('/resources')}`} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                    <NavLink to="/resources">
                        <img className="header__icon" src="/public/assets/lollipop.svg" />
                    </NavLink>
                    <NavLink className="header__page-link" to='/resources'>Tratos</NavLink>
                </div>
                <div className={`header__link-container ${getShadowClass('/help')}`} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                    <NavLink to="/help">
                        <img className="header__icon" src="/src/assets/help.png" />
                    </NavLink>
                    <NavLink className="header__page-link" to='/help'>Ayuda</NavLink>
                </div>
                {(session) ?
                    <Fragment>                        
                        <div className={`header__link-container ${getShadowClass('/logout')}`} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                            <NavLink to="/logout">
                                <img className="header__icon" src="/public/assets/login.svg" />
                            </NavLink>
                            <NavLink className="header__page-link" to='/login'>Logout</NavLink>
                        </div>
                    </Fragment> :
                    <Fragment>
                        <div className={`header__link-container ${getShadowClass('/login')}`} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                            <NavLink to="/login">
                                <img className="header__icon" src="/public/assets/login.svg" />
                            </NavLink>
                            <NavLink className="header__page-link" to='/login'>Login</NavLink>
                        </div>
                    </Fragment>}
            </div>
        </header>
    );
}