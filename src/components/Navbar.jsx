import React from 'react';

function Navbar(){
    return(
        <nav class="container mx-auto flex" id="nav">
            <div class="flex" id="nav-head">
                <div class="nav-brand font-maitree">
                    <a class="text-md md-text-lg lg-text-xl text-dark" href="#">
                        Prem.
                    </a>
                </div>
                <div class="toggle-btn">
                    <button class="btn text-lg">
                        <i class="bi bi-filter-right"></i>
                    </button>
                </div>
            </div>
            <div class="collapse flex" id="navbarSupportedContent">
                <ul class="flex md-text-md lg-text-md">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#resume">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#work">Work</a>
                    </li>
                </ul>
            </div>
        </nav>
   );
}
export default Navbar;
