import React from "react";
import google from "./assets/mgs/google.png"
import microsoft from "./assets/mgs/microsoft.png"
import facebook from "./assets/mgs/facebook.jpg"
import amazon from "./assets/mgs/amazon.png"
import "./css/style.css" 
import "./css/style.css.map"


function Sponsors(){
    return(
        <div className="spons__container">
            <div className="row__container">
                <div className="col__container"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                >
                <img src={google} alt="spotify svg" />
            </div>
            <div className="col__container"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="1000"
            >
            <img src={microsoft} alt="diskord svg" />
            </div>
            <div className="col__container"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="1000"
            >
            <img src={facebook} alt="reddit svg" />
            </div>
                <div className="col__container"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                >
                <img src={amazon} alt="diskord svg" />
                </div>
            </div>
    </div>
    )
}

export default Sponsors 