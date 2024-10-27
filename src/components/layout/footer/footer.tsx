import React from "react";
import "./footer.scss";

export function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__item">Nosotros</li>
                <li className="footer__item">Contacto</li>
                <li className="footer__item">Invita a un amigo</li>
                <li className="footer__item">Blog</li>
            </ul>
        </footer>
    );
}
