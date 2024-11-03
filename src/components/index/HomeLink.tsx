import React from "react";

export function HomeLink({ name, icon, id, onMouseEnter }) {
    return (
        <div className="home-link" onMouseEnter={onMouseEnter}>
            <h3 className="home-link__title">{name}</h3>
            <img className="home-link__image" src={icon} />
        </div>
    )
}