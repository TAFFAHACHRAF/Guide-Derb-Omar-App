import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h1 className="display-4">GUIDE DERB OMAR.</h1>
                        <p className="lead my-4">La sociéte GUIDE DERB OMAR pour la vente en gros et les services commerciaux.</p>
                    <form className="form-subscribe form-inline mb-3">
                        <div className="form-group flex-grow-1">
                        <label className="sr-only" for="email4">Email</label>
                        <input type="text" className="form-control form-control-lg flex-grow-1 mr-2" id="email4" placeholder="Your email address..." />
                        </div>
                        <Link  to="/login"><button type="submit" className="btn btn-primary  btn-lg mt-0 mt-md-3 mt-lg-0">Subscribe</button></Link>
                    </form>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="devices">
                            <img src="assets/img/Team goals-cuat.svg" alt="Example Navbar 1" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header