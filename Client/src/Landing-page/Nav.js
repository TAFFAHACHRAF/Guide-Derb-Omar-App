import React from "react";
import logo from "./images/logo.svg"
import "./css/style.css" 
import "./css/style.css.map"


function Nav(){
    return(
        <div className="gape">
            <header>
                <div className="navbar">
                    <div className="logo">
                    <a href="#"><img src={logo} alt="logo" /></a>
                    </div>
                    <nav>
                    <ul className="nav toggleNav">
                        <li><a href="#about">About</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#testimonials">Tetimonials</a></li>
                        <li><a href="#help">Help</a></li>
                    </ul>
                    </nav>
                    <div className="sign">
                    <button>Sign in</button>
                    <button>Sign up</button>
                    </div>
                    <div className="open-close">
                    <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Nav