import React from "react";
function Contact(){
    return(
        <div className="contact" id="contact">
            <div className="cta bg-primary text-center text-white">
              <h1 className="text-white">Nous contacter</h1>
              <p className="lead">Dites-nous ce que vous en pensez. Nous vous répondrons dans la journée.</p>
            </div>
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2">
                            <div className="card no-hover">
                                <div className="card-body p-5">
                                    <form>
                                        <div className="form-group">
                                        <label htmlFor="email1">Votre nom</label>
                                        <input type="email" className="form-control form-control-lg" id="email1" aria-describedby="emailHelp" placeholder="Entrez le nom" />
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="email1">Votre adresse e-mail</label>
                                        <input type="email" className="form-control form-control-lg" id="email1" aria-describedby="emailHelp" placeholder="Entrez l'e-mail" />
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="email1">Votre message</label>
                                        <textarea className="form-control" rows="5"></textarea>
                                        </div>
                                        <div className="text-center mt-5">
                                            <button type="submit" className="btn btn-primary btn-lg">Envoyer le message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact