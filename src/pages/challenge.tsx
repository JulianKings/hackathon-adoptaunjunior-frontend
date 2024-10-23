import React from "react";
import { useParams } from "react-router-dom";

export function Challenge() {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            Challenges Page for id: {id}
        </div>
    );
}