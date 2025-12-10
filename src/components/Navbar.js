//navbar menus,logo,profile
import React from "react";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">NETFLIX</div>
            <ul className="menu">
                <li>Home</li>
                <li>Movies</li>
                <li>Series</li>
                <li>My List</li>
            </ul>
            <div className="profile">P</div>            
        </nav>
    )
}
export default Navbar;

