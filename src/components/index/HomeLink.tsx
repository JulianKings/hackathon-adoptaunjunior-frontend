import React, { useState } from "react";

export function HomeLink({ name, icon }) {
    return (
        <div className="home-link">
            <h3 className="home-link__title">{name}</h3>
            <img className={`home-link__image ${!icon && 'home-link__image--hidden'}`} src={icon} alt={`${name} icon`}/>
        </div>
    )
}