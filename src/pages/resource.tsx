import React from "react";
import { useParams } from "react-router-dom";

export function Resource() {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            Resource Page for id: {id}
        </div>
    );
}