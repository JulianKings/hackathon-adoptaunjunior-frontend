import React from "react";
import { NavLink } from "react-router-dom";

export function Challenges() {
    return (
        <div>
            Challenges Page<br />
            <NavLink to='/challenge/1'>Challenge 1</NavLink><br />
            <NavLink to='/challenge/2'>Challenge 2</NavLink><br />
        </div>
    );
}