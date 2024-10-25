import React from "react";

export function HomeLink({ name, icon }) {
    return (
        <div className="home-link">
            <h3 className="home-link__title">{name}</h3>
            <img src={icon} />
        </div>
    )
}