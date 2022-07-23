import React from "react";
import "./css/style.css" 
import "./css/style.css.map"
import servers from "./assets/svgs/servers.svg"
import location  from "./assets/svgs/location.svg"
import person from "./assets/svgs/person.svg"


function Services(){
    return(
        <div className="services__conrtainer" id="features">
            <div className="services__container__content">
                <div className="service__container" 
                        data-aos="zoom-in" 
                        data-aos-offset="200"
                        data-aos-delay="300"
                        data-aos-duration="500"
                >
                    <img src={person} alt=" peson svg" />
                    <h1>
                        <span>+90</span>
                        <small>users</small>
                    </h1>
                </div>
                <div className="service__container" 
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="700"
                        data-aos-duration="500"
                > 
                    <img src={location} alt=" peson svg" />
                    <h1>
                        <span>+30</span>
                        <small>Location</small>
                    </h1>
                </div>
                <div className="service__container" 
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="1000"
                        data-aos-duration="500"
                >
                    <img src={servers} alt=" peson svg" />
                    <h1>
                        <span>+50</span>
                        <small>Servers</small>
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default Services