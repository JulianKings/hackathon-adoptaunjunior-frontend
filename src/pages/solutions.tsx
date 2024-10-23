import React from "react";
import { NavLink } from "react-router-dom";

export function Solutions() {
    return (
        <div>
            Solutions Page<br />
            <NavLink to='/solution/1'>Solution 1</NavLink><br />
            <NavLink to='/solution/2'>Solution 2</NavLink><br />
        </div>
    );
}   