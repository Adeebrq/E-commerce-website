import React from "react";
import { NavLink } from "react-router-dom";

const NavBar= ()=> {
    <nav className="NavBar">
        return(
            <ul>
            <li><NavLink activeClassName="selected"  className="nav-link" exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName="selected" className="nav-link" to="/contact">Contact</NavLink></li>
        </ul>
        )
    </nav>
}
export default NavBar;