import React from "react";

export function SingleResource({image, title, description}) {
    return (
        <>
        <img src={image} />
        <h2>{title}</h2>
        <p>{description}</p>
        </>
    );
}