import React from "react";
import { NavLink } from "react-router-dom";

export function Resources() {
    return (
        <div>
            Resources Page<br />
            <NavLink to='/resource/1'>Resource 1</NavLink><br />
            <NavLink to='/resource/2'>Resource 2</NavLink><br />
        </div>
    );
}   