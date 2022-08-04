import React from "react";
import { Link } from "react-router-dom";

function Subscribe(){
    return(
        <div className="cta bg-primary text-center text-white">
            <h1 className="text-white">Avec nous sur la plateforme GUIDE DERB OMAR !</h1>
            <p className="lead">Vous faites partie d'une immense communauté commerciale, inscrivez-vous maintenant et vous trouverez toutes les données et informations sur les grossistes</p>
            <Link to="register" className="btn btn-white btn-lg mt-4">Commencer</Link>
        </div>
    )
}

export default Subscribe