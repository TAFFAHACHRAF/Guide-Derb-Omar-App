import React from 'react';
import { Link as Link} from "react-scroll";
import { Link as LinkRouterDom} from 'react-router-dom';

function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4" id="home">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center btn" to="home" smooth={true} duration={1000}><img src="assets/img/guide.png" alt="Example Navbar 1" className="mr-2" height="55"/> <div className='text-white'>GDO</div></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown-1" aria-controls="navbarNavDropdown-1"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNavDropdown-1">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link btn" to="home" smooth={true} duration={1000}>Accueil
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="about" smooth={true} duration={1000}>À propos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="services" smooth={true} duration={1000}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn" to="contact" smooth={true} duration={1000}>Contactez-nous</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle btn" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Langues
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <LinkRouterDom to="/ar" className="dropdown-item btn">العربية</LinkRouterDom>
                  <LinkRouterDom to="/fr" className="dropdown-item btn">Français</LinkRouterDom>
                  <LinkRouterDom to="/en" className="dropdown-item btn">English</LinkRouterDom>
                </div>
              </li>
              <li className="nav-item">
                <LinkRouterDom className="nav-link btn" to="register">Se connecter
                </LinkRouterDom>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  );
};

export default Navbar