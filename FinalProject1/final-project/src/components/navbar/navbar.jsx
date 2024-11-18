import React from "react";
import './navbars.css';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return(
        <div className="navbar__wrapper">
                <NavLink className='page1' to="/">Главаня страница</NavLink>
                <NavLink className='page2' to="/projects">Мои проэкты</NavLink>
                <NavLink className='page3' to="/blog">Блог</NavLink>
        </div>
    );
};
export default Navbar;