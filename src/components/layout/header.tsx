import React, { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useApiSelector } from "../../redux/store";
import { selectSession } from "../../redux/slices/session";

export function Header() {

    const location = useLocation();
    const headerClass = location.pathname === '/' ? 'header--home' : 'header--default';
    const session = useApiSelector(selectSession);

    const handleHover = (event) => {
        event.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 255, 255, 0.6)';
        event.currentTarget.style.borderRadius = '12px';
    };
    
    const handleHoverLeave = (event) => {
        event.currentTarget.style.boxShadow = 'none';
    };

    return (
        <header className={`header ${headerClass}`}>
            <div className="header__container">
                <div className="header__link-container" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                    <NavLink to="/">
                        <img className="header__icon header__icon--skull" src="/src/assets/skull.png" />
                    </NavLink>
                    <NavLink className="header__page-link" to='/'>Inicio</NavLink>
                </div>
                <div className="header__link-container" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                    <NavLink to="/challenges" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                        <img className="header__icon" src="/public/assets/magic.svg" />
                    </NavLink>
                    <NavLink className="header__page-link" to='/challenges'>Trucos</NavLink>
                </div>
                <div className="header__link-container" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                    <NavLink to="/resources" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                        <img className="header__icon" src="/public/assets/lollipop.svg" />
                    </NavLink>
                    <NavLink className="header__page-link" to='/resources'>Tratos</NavLink>
                </div>
                <div className="header__link-container" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                    <NavLink to="/help" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                        <img className="header__icon" src="/src/assets/help.png" />
                    </NavLink>
                    <NavLink className="header__page-link" to='/help'>Ayuda</NavLink>
                </div>
                {(session) ?
                    <Fragment>                        
                        <div className="header__link-container" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                            <NavLink to="/logout" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                                <img className="header__icon" src="/public/assets/login.svg" />
                            </NavLink>
                            <NavLink className="header__page-link" to='/login'>Logout</NavLink>
                        </div>
                    </Fragment> :
                    <Fragment>
                        <div className="header__link-container" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                            <NavLink to="/login" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                                <img className="header__icon" src="/public/assets/login.svg" />
                            </NavLink>
                            <NavLink className="header__page-link" to='/login'>Login</NavLink>
                        </div>
                    </Fragment>}
            </div>
        </header>
    );
}