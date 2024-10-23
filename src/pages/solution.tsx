import React from "react";
import { useParams } from "react-router-dom";

export function Solution() {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            Solution Page for id: {id}
        </div>
    );
}