import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="desk">
                <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
                <NavLink exact to="/blog" activeClassName="nav-active">Blog</NavLink>
                <NavLink exact to="/contact" activeClassName="nav-active">Contact</NavLink>
            </div>
            <div className="burger">
                <div className="tranche top"></div>
                <div className="tranche middle"></div>
                <div className="tranche bottom"></div>
            </div>
        </div>

    )
}

export default Navigation
