import React from "react";
import { SingleResourceSnippet } from "./SingleResourceSnippet";

const resources = [
    { 
      title: 'Resource 1', 
      image: 'https://example.com/image1.jpg', 
      description: 'Adéntrate en el terrorífico mundo de los bucles... bajo tu propio riesgo.' 
    },
    { 
      title: 'Resource 2', 
      image: 'https://example.com/image2.jpg', 
      description: 'Todos lo odiaban e ignoraban, hasta que hizo su terrible aparición en una entrevista.' 
    },
    { 
      title: 'Resource 3', 
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