import React from "react";

export function SingleResourceSnippet({ title, image, description }) {
    return (
        <>
            <h3>{title}</h3>
            <img src={image} />
            <p>{description}</p>
        </>
    )
}