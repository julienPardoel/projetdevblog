import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
            <NavLink exact to="/blog" activeClassName="nav-active">Blog</NavLink>
            <NavLink exact to="/contact" activeClassName="nav-active">Contact</NavLink>
        </div>
    )
}

export default Navigation
