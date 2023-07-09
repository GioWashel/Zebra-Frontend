import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
    return(
    <nav className="nav-container">
        <ul>
            <li><Link to="/howitworks" className="links">How it works</Link></li>
            <li><Link to="/about" className="links">About</Link></li>
            <li><Link to="/contact" className="links">Contact</Link></li>
        </ul>

    </nav>
    );
};