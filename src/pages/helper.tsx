import React from "react";
import { NavLink } from "react-router-dom";

export function Helper() {    
    return (
        <div>
            Help Page<br />
            <NavLink to='/help/1'>Help 1</NavLink><br />
            <NavLink to='/help/2'>Help 2</NavLink><br />
        </div>
    );
}