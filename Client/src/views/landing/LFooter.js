import React from "react";
import { Link } from "react-scroll";

const Footer = () =>{
    return(
        <footer className="footer-1 bg-light text-dark m-4">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="links">
                        <ul className="footer-menu list-unstyled d-flex flex-row text-center text-md-left">
                            <Link className="btn" to="home" smooth={true} duration={1000}>Accueil</Link>
                            <Link className="btn" to="about" smooth={true} duration={1000} >À propos</Link>
                            <Link className="btn" to="services" smooth={true} duration={1000}>Services</Link>
                            <Link className="btn" to="contact" smooth={true} duration={1000}>Contactez-nous</Link>
                        </ul>
                    </div>
                    <div className="social mt-4 mt-md-0">
                    <Link className="twitter btn btn-outline-primary btn-icon" to="https://twitter.com/bootstrapbay" >
                        <i className="bi bi-twitter"></i>
                    </Link>
                    <Link className="facebook btn btn-outline-primary btn-icon" to="https://www.facebook.com/bootstrapbayofficial/">
                        <i className="bi bi-facebook"></i>
                    </Link>
                    <Link className="github btn btn-outline-primary btn-icon" to="https://linkedin.com/guide_derb_omar">
                        <i className="bi bi-linkedin"></i>
                    </Link>
                    <Link className="youtube btn btn-outline-primary btn-icon" to="https://youtube.com/">
                        <i className="bi bi-youtube"></i>
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