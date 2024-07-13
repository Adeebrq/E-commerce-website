import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "react-materialize";

const NavBar= () => {
    <nav className="navbar">
        <div className="nav-links">
            <ul>
                <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName="selected" className="nav-link" to="/men">Mens</NavLink></li>
                <li><NavLink activeClassName="selected" className="nav-link" to="/women">Womens</NavLink></li>
            </ul>
        </div>
        <div className="shopping">
            <NavLink to="/cart"><Icon medium>shopping_cart</Icon></NavLink>
        </div>
    </nav>
};

export default NavBar;