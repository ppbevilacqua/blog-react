import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/"> <h3 className="nav-link">Home</h3> </Link>
        </nav>
    );
}

export default NavBar;