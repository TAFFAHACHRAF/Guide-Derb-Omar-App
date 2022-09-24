import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_89zcnm6', 'template_i1uphs3', form.current, 'pwOTwvQG4MtdyZD7N')
        .then((result) => {
            console.log(result.text);
            alert(result.text)
        }, (error) => {
            console.log(error.text);
            alert(error.text)
        });
    };

    return(
        <div className="contact" id="contact">
            <div className="cta bg-primary text-center text-white p-4">
              <h1 className="text-white">Nous contacter</h1>
              <p className="lead">Dites-nous ce que vous en pensez. Nous vous répondrons dans la journée.</p>
            </div>
            <div className="bg-light p-4 mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2">
                            <div className="card no-hover">
                                <div className="card-body p-5">
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="form-group">
                                        <label htmlFor="email1">Nom</label>
                                        <input type="text" name="username" className="form-control form-control-lg" id="email1" aria-describedby="emailHelp" style={{fontSize:'17px'}} />
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="email1">Email</label>
                                        <input type="email" name="useremail" className="form-control form-control-lg" id="email1" aria-describedby="emailHelp" style={{fontSize:'17px'}} />
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="email1">Message</label>
                                        <textarea className="form-control" style={{fontSize:'17px'}} name="message" rows="5"></textarea>
                                        </div>
                                        <div className="text-center mt-5">
                                            <button type="submit" className="btn btn-primary btn-lg">Envoyer</button>
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