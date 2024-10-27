import React from "react";
import { useLocation } from "react-router-dom";

export function Footer() {
    
    const location = useLocation();
    const footerClass = location.pathname === '/' ? 'footer--home' : 'footer--default';
    return (
        <footer className={`footer ${footerClass}`}>
            <p>Nosotros</p>
            <p>Contacto</p>
            <p>Invita a un amigo</p>
            <p>Blog</p>
        </footer>
    );
}