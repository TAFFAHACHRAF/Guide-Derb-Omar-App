import React from "react";

function Feature(){
    return(
        <div className="features bg-primary text-white" id="about">
            <div className="text-center">
                <h2 className="text-white">Nos objectifs</h2>
                <p className="lead">Nous partageons avec vous tout ce dont vous avez besoin pour progresser dans votre business.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="feature">
                            <div className="big-icon">
                                <img src="assets/img/arrow.png" alt="feature"/>
                            </div>
                            <p className="lead" >Augmenter le nombre de transactions et les profits de nos clients grâce au marketing et à la publicité de leurs produits et services.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="feature">
                            <div className="big-icon">
                                <img src="assets/img/problem-solving.png" alt="feature"/>
                            </div>
                            <p className="lead">Fournir un service, le premier du genre au Maroc et dans le monde arabe, pour répondre aux besoins numériques des commerçants.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="feature">
                            <div className="big-icon text-success">
                                <img src="assets/img/feature3.svg" alt="feature3" />
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