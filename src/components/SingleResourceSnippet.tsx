import React from "react";

export function SingleResourceSnippet({ title, image, description }) {
    return (
        <div>
            <h3>{title}</h3>
            <img className="resources-snippet__image" src={image} />
            <p>{description}</p>
        </div>
    )
}