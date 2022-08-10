import React from "react";
import { Link } from "react-router-dom";

function Rnavbar(){
    return(
        <div className="register">
        <nav class="navbar navbar-expand-md navbar-transparent navbar-light">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 offset-md-1 d-flex justify-content-between">
                    <Link className="navbar-brand d-flex align-items-center btn" to="/" smooth={true} duration={1000}><img src="assets/img/guide.png" alt="Example Navbar 1" className="mr-2" height="55"/> <div className='text-dark'>GDO</div></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown-7" aria-controls="navbarNavDropdown-7"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </div>
      </nav>
      </div>
    )
}

export default Rnavbar