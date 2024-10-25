import React from "react";
import { SingleResourceSnippet } from "./SingleResourceSnippet";

const resources = [
    { 
      title: 'Resource 1', 
      image: 'https://example.com/image1.jpg', 
      description: 'For this kata you will be using some meta-programming...' 
    },
    { 
      title: 'Resource 2', 
      image: 'https://example.com/image2.jpg', 
      description: 'For this kata you will be using some meta-programming...' 
    },
    { 
      title: 'Resource 3', 
      image: 'https://example.com/image3.jpg', 
      description: 'For this kata you will be using some meta-programming...' 
    },
    { 
      title: 'Resource 4', 
      image: 'https://example.com/image4.jpg', 
      description: 'For this kata you will be using some meta-programming...' 
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