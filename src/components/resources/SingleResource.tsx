import React from "react";

export function SingleResource({image, title, description}) {
    return (
        <div className="resources__grid__single">
            <img src={image} />
            <div className="resources__grid__single__text-container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}