import React from "react";

 function ChangeHeight(val){
    const Height={
        height : val
    }
    return Height
 }

 function ChangeWidth(val){
    const Width={
        width : val
    }
    return Width
 }

 function Services(){
    return(
        <div className="blog-posts bg-light" id="services">
            <div className="text-center">
                <h2>Nos services</h2>
                <p className="lead">Nous publions constamment de nouvelles fonctionnalités. Restez à jour avec nous</p>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12" style={ChangeWidth(250)} >
                        <div className="component">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <img className="card-img" style={ChangeHeight(250)} src="assets/img/43160.jpg" alt="card" />
                                </div>
                                <div className="card-body">
                                    <span className="badge badge-success mb-2">Marchand à tempérament</span>
                                <h4 className="card-title">Vous êtes un marchand à tempérament !</h4>
                                <p className="card-text">Alors c'est chez vous pour développer votre activité, renseignez-vous en vous inscrivant et découvrez tous les acteurs du métier Et des services, et vous pouvez faire vos achats pendant que vous êtes à votre place via nos marchés en ligne ou importer vous-même des produits en vous coordonnant avec les acteurs commerciaux de la plateforme.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#a" className="btn btn-primary">Lire la suite</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12" style={ChangeWidth(250)} >
                        <div className="component">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <img className="card-img" style={ChangeHeight(250)}  src="assets/img/grossiste.jpg" alt="card" />
                                </div>
                                <div className="card-body">
                                    <span className="badge badge-warning mb-2">Grossiste</span>
                                <h4 className="card-title">Vous êtes grossiste !</h4>
                                <p className="card-text">Alors vous êtes au bon endroit pour gagner de nouveaux clients et augmenter vos ventes, vous pouvez créer votre boutique Grâce à notre plateforme, affichez vos produits et attendez les commandes, tandis que notre mission est de commercialiser et d'amener plus de visiteurs sur notre plateforme.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#a" className="btn btn-primary">Lire la suite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-4 col-md-6 col-sm-12" style={ChangeWidth(250)} >
                        <div className="component">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <img className="card-img" style={ChangeHeight(250)} src="assets/img/production.jpg" alt="card" />
                                </div>
                                <div className="card-body">
                                    <span className="badge badge-secondary mb-2">Société de production</span>
                                <h4 className="card-title">Vous êtes une usine ou une société de production !</h4>
                                <p className="card-text">Vous êtes donc sur le marché électronique le plus important et le plus vital pour commercialiser vos produits et trouver plus de clients.Inscrivez-vous maintenant et remplissez votre compte avec toutes les informations requises pour présenter vos produits et leurs prix aux visiteurs et aux personnes intéressées.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#a" className="btn btn-primary">Lire la suite</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12" style={ChangeWidth(250)} >
                        <div className="component">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <img className="card-img" style={ChangeHeight(250)} src="assets/img/importer.jpg" alt="card" />
                                </div>
                                <div className="card-body">
                                    <span className="badge badge-secondary mb-2">Importateur</span>
                                <h4 className="card-title">Vous êtes un importateur !</h4>
                                <p className="card-text">Alors, inscrivez-vous et connaissez vos services via votre page officielle dans votre compte sur notre plateforme.De nombreuses personnes intéressées par l'importation et l'exportation vous contacteront.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#a" className="btn btn-primary">Lire la suite</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12" style={ChangeWidth(250)} >
                        <div className="component">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <img className="card-img" style={ChangeHeight(250)}  src="assets/img/guide.jpg" alt="card" />
                                </div>
                                <div className="card-body">
                                    <span className="badge badge-secondary mb-2">Guide</span>
                                <h4 className="card-title">Vous êtes un accompagnateur et guide au sein des marchés de gros !</h4>
                                <p className="card-text">Vous êtes donc au bon endroit pour diriger les arrivées vers les marchés de gros.Utilisez votre expérience avec nous et vous recevrez plus de contacts et de rendez-vous et gagnerez plus d'argent.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#a" className="btn btn-primary">Lire la suite</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12" style={ChangeWidth(250)} >
                        <div className="component">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <img className="card-img" style={ChangeHeight(250)}  src="assets/img/transporter.jpg" alt="card" />
                                </div>
                                <div className="card-body">
                                    <span className="badge badge-secondary mb-2">Entreprise </span>
                                <h4 className="card-title">Vous êtes le propriétaire d'une entreprise maritime !</h4>
                                <p className="card-text">Donc ici avec nous sur la plateforme, vous augmentez votre niveau d'expédition, enregistrez votre compte et attendez beaucoup de demandes et de consultations.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#a" className="btn btn-primary">Lire la suite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
 }

export default Services