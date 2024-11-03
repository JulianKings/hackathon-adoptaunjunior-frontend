import React from "react";

export function HomeLink({ name, icon, id, onMouseEnter, onMouseLeave }) {
    return (
        <div className="home-link" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <h3 className="home-link__title">{name}</h3>
            <img className="home-link__image" src={icon} />
        </div>
    )
}