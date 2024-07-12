import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css"

const Header= () => {
    <div className="Header">
        <h1 id="Header-title">SHOP NOW!</h1>
        <div className="links-header">
            <p><NavLink activeClassName="Selected" className="nav-link-header" to="/women">Women</NavLink></p>
            <p><NavLink activeClassName="Selected" className="nav-link-header" to="/men">Men</NavLink></p>
            <p><NavLink activeClassName="Selected" className="nav-link-header" to="/clothes">Clothes</NavLink></p>
            <p><NavLink activeClassName="Selected" className="nav-link-header" to="/accessories">Accessories</NavLink></p>
        </div>
    </div>
}

export default Header;