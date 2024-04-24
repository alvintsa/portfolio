import React from "react";
import { NavLink } from 'react-router-dom';
import "./NavBar.css";


//TODO: format NAVBAR!!
const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/personal" className="nav-link" activeClassName="active">Personal Life</NavLink>
            <NavLink to = "/projects" className = "nav-link" activeClassName = "active" >Projects</NavLink>
            <NavLink to="/research" className="nav-link" activeClassName="active">Research</NavLink>
        </nav>
    );
    
}



export default NavBar;