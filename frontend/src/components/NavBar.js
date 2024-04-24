import React from "react";
import { NavLink } from 'react-router-dom';
import "./NavBar.css";


//TODO: IMPLEMENT NAVBAR!!
const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
        </nav>
    );
    
}



export default NavBar;