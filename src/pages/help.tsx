import React from "react";
import { useParams } from "react-router-dom";

export function Help() {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            Help Page for id: {id}
        </div>
    );
}