import React, { useState } from 'react';

function Navbar() {
    const [hmClicked, setHmClicked] = useState(false)
    function handleClick(props) {
        setHmClicked(!hmClicked)
    }
    return (
        <nav className="navbar container" id="nav">
            <div className="navbrand" style={hmClicked ? { "zIndex": "1" } : { "zIndex": "0" }}>
                <a href="/" className='font-maitree'>
                    Prem.
                </a>
            </div>
            <div className="menu-icon" onClick={handleClick} style={hmClicked ? { "zIndex": "1" } : { "zIndex": "0" }}>
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
        </nav >
    );
}
export default Navbar;
