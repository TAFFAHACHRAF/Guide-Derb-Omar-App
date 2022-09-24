import React from "react";
import feature1 from "./assetsLanding/img/arrow.png"
import feature2 from "./assetsLanding/img/problem-solving.png"
import feature3 from "./assetsLanding/img/feature3.svg"

const Feature = () =>{
    return(
        <div className="features bg-primary text-white p-4" id="about">
            <div className="text-center">
                <h2 className="text-white">Nos objectifs</h2>
                <p className="lead">Nous partageons avec vous tout ce dont vous avez besoin pour progresser dans votre business.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="feature">
                            <div className="big-icon">
                                <img src={feature1} alt="feature"/>
                            </div>
                            <p className="lead" >Augmenter le nombre de transactions et les profits de nos clients grâce au marketing et à la publicité de leurs produits et services.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="feature">
                            <div className="big-icon">
                                <img src={feature2} alt="feature"/>
                            </div>
                            <p className="lead">Fournir un service, le premier du genre au Maroc et dans le monde arabe, pour répondre aux besoins numériques des commerçants.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="feature">
                            <div className="big-icon text-success">
                                <img src={feature3} alt="feature3" />
                            </div>
                            <p className="lead">Former les commerçants et les personnes intéressées par toutes les activités commerciales gratuites et électroniques grâce à nos experts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature