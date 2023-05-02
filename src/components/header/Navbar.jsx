import React, { useState } from 'react';
import "./NavbarStyles.css"
function Navbar() {
    const [hmClicked, setHmClicked] = useState(false)
    function handleClick(props) {
        setHmClicked(!hmClicked)
    }
    return (
        <nav className="navbar" id="nav">
            <div className="navbrand">
                <a href="/" className='font-maitree'>
                    Prem.
                </a>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i>{hmClicked ? "X" : "E"}</i>
            </div>
            <ul className={hmClicked ? "nav-menu active" : "nav-menu"}>
                <li className="nav-link">
                    <a className="" aria-current="page" href="#about">
                        About
                    </a>
                </li>
                <li className="nav-link">
                    <a className="" href="#resume">
                        Resume
                    </a>
                </li>
                <li className="nav-link">
                    <a className="" href="#work">
                        Work
                    </a>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
