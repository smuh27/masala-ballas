import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-item home">
                <Link to="/">Masala Ballas</Link>
            </div>
            <div className="nav-item stats">
                <Link to="/Stats">Team Stats</Link>
            </div>
            <div className="nav-item about">
                <Link to="/Roster">Player Stats</Link>
            </div>
        </div>
    );
};

export default Navbar;
