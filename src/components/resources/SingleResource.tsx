import React from "react";
import { ApiResourceInterface } from "../../interfaces/resource";
import { useNavigate } from "react-router-dom";

export function SingleResource({id, created_at, updated_at, title, description, content, published, type, url, image}: ApiResourceInterface) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/resources/${id}`);
    }
    return (
        <div className="resources__grid__single" onClick={handleClick}>
            <img src={image} />
            <div className="resources__grid__single__text-container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}