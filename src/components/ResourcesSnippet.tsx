import React from "react";
import { SingleResourceSnippet } from "./SingleResourceSnippet";

const resources = [
    { 
      title: 'Asusta con tus bucles optimizados', 
      image: 'https://example.com/image1.jpg', 
      description: 'Adéntrate en el terrorífico mundo de los bucles... bajo tu propio riesgo.' 
    },
    { 
      title: 'La leyenda del algoritmo asesino', 
      image: 'https://example.com/image2.jpg', 
      description: 'Todos lo odiaban e ignoraban, hasta que hizo su terrible aparición en una entrevista.' 
    },
    { 
      title: 'El array endemoniado: La venganza', 
      image: 'https://example.com/image3.jpg', 
      description: '“Muerte a todo aquel que no sepa manipularme correctamente” dijo lleno de odio. ¿Dejarás que se cumpla su profesía?' 
    },
];

export function ResourcesSnippet() {
    return (
        <div className="resources-snippet">
            {resources.map(resource => (
                <SingleResourceSnippet 
                    title={resource.title}
                    image="src/assets/resource-mock-image.png"
                    description={resource.description}
                />
            ))}
        </div>
    )
}