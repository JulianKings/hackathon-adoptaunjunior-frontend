import React from "react";
import { SingleResourceSnippet } from "./SingleResourceSnippet";
import { ApiResourceInterface } from "../../interfaces/resource";
import { resources } from '../../pages/index'


export function ResourcesSnippet() {
    return (
        <div className="resources-snippet">
            {resources.slice(0,3).map(resource => (
                <SingleResourceSnippet 
                    title={resource.title}
                    image={resource.image}
                    description={resource.description}
                />
            ))}
        </div>
    )
}