import React from "react";
import { Link } from "react-scroll";

function Footer(){
    return(
        <footer className="footer-1 bg-light text-dark">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="links">
                        <ul className="footer-menu list-unstyled d-flex flex-row text-center text-md-left">
                            <li><Link to="home" smooth={true} duration={1000}>Accueil</Link></li>
                            <li><Link to="about" smooth={true} duration={1000} >À propos</Link></li>
                            <li><Link to="services" smooth={true} duration={1000}>Services</Link></li>
                            <li><Link to="contact" smooth={true} duration={1000}>Contactez-nous</Link></li>
                        </ul>
                    </div>
                    <div className="social mt-4 mt-md-0">
                    <Link className="twitter btn btn-outline-primary btn-icon" to="https://twitter.com/bootstrapbay" >
                        <i className="fab fa-twitter"></i>
                        <span className="sr-only">View our Twitter Profile</span>
                    </Link>
                    <Link className="facebook btn btn-outline-primary btn-icon" to="https://www.facebook.com/bootstrapbayofficial/">
                        <i className="fab fa-facebook"></i>
                        <span className="sr-only">View our Facebook Profile</span>
                    </Link>
                    <Link className="github btn btn-outline-primary btn-icon" to="https://github.com/bootstrapbay">
                    <i className="fab fa-github"></i>
                    <span className="sr-only">View our GitHub Profile</span>
                    </Link>
                    <Link className="youtube btn btn-outline-primary btn-icon" to="https://github.com/bootstrapbay">
                        <i className="fab fa-youtube"></i>
                        <span className="sr-only">View our Youtube Chanel</span>
                    </Link>
                </div>
                </div>
                <div className="copyright text-center">
                    <hr />
                    <p className="small">&copy; 2022, made with <span className="text-danger"><i className="fas fa-heart"></i></span> by Achraf TAFFAH</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer