import React from "react";
import vector from "./images/vector-1.jpg"
import "./css/style.css" 
import "./css/style.css.map"


function Standard(){
    return(
        <div className="get__started__container" id="about">
            <div 
            className="get__started__left" 
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="800"
            >
            <h1>Want anything to be easy with <span>LaslesVPN</span>.</h1>
            <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            <button>Get Started</button>
            </div>
            <div className="get__started__right"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
            >
                <img src={vector} alt="svg girl" />
        </div>
      </div>
    )
}

export default Standard