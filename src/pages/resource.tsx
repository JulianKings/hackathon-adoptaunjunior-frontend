import React from "react";
import { useParams } from "react-router-dom";
import "./../style/pages/layout/resource.scss";

const resources = [
    {
        id: "1",
        title: "¿Ejercicios o proyectos?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "/assets/resource-mock-image.png"
    },
];

export function Resource() {
    const { id } = useParams<{ id: string }>();

    const resource = resources.find((res) => res.id === id);

    if (!resource) {
        return <p>Resource not found</p>;
    }

    return (
        <div className="resource">
            <img className="resource__img" src="./../assets/pumpkin.webp" alt="" />
            <h1 className="resource__title">{resource.title}</h1>
            <img
                src={resource.image}
                alt={resource.title}
                className="resource__image"
            />

            
            <p className="resource__text">{resource.description}</p>
        </div>
    );
}
