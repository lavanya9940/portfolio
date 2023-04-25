import React from 'react';

function Navbar() {
    return (
        <nav className="container mx-auto flex" id="nav">
            <div className="flex" id="nav-head">
                <div className="nav-brand font-maitree">
                    <a className="text-md md-text-lg lg-text-xl text-dark" href="#">
                        Prem.
                    </a>
                </div>
                <div className="toggle-btn">
                    <button className="btn text-lg">
                        <i className="bi bi-filter-right" />
                    </button>
                </div>
            </div>
            <div className="collapse flex" id="navbarSupportedContent">
                <ul className="flex md-text-md lg-text-md">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#about">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#resume">
                            Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#work">
                            Work
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
