import React from "react";
import { ApiResourceInterface } from "../../interfaces/resource";

export function SingleResource({created_at, updated_at, title, description, content, published, type, url, image}: ApiResourceInterface) {
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