import React from "react";

export function SingleResourceSnippet({ title, image, description }) {
    return (
        <div className="resources-snippet__single-container">
            <h3 className="resources-snippet__title">{title}</h3>
            <img className="resources-snippet__image" src={image} />
            <p className="resources-snippet__description">{description}</p>
        </div>
    )
}