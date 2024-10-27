import React from "react";
import { NavLink } from "react-router-dom";
import { SingleResource } from "../components/resources/SingleResource";

const resources = [
    {
        title: "¿Ejercicios o proyectos?",
        description: "La espeluznante pregunta que todos nos hacemos. ¿Por qué aprender algoritmos o bucles en lugar de construir algo? Aquí te explicamos por qué.",
        image: "/assets/resource-mock-image.png"
    },
    {
        title: "Cómo planificar tu entrenamiento",
        description: "Frankenstein y Drácula fracasaron porque no tenían un plan bien definido. Pero tú quieres ser diferente, ¿O no?",
        image: "/assets/resource-mock-image.png"
    },
    {
        title: "Cómo planificar tu entrenamiento",
        description: "Frankenstein y Drácula fracasaron porque no tenían un plan bien definido. Pero tú quieres ser diferente, ¿O no?",
        image: "/assets/resource-mock-image.png"
    }
];


export function Resources() {
    return (
        <div className="resources">
            <h1 className="resources__title">Tratos</h1>
            <div className="resources__grid">
                {resources.map((resource, index) => (
                    <SingleResource
                        key={index}
                        image={resource.image}
                        title={resource.title}
                        description={resource.description}
                    />
                ))}
            </div>
        </div>
    );
}   