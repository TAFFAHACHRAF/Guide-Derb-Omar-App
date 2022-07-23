import React from "react";
import "./css/style.css" 
import "./css/style.css.map"
import two from "./assets/svgs/two.svg"

function Features(){
    return(
        <div className="features__container">
         <div 
             className="features__container__left"
             data-aos="zoom-out-right"
             data-aos-offset="400"
             data-aos-delay="500"
             data-aos-duration="500"
         >
             <img src={two} alt="" />
         </div>
         <div 
            className="features__container__right"
            data-aos="zoom-out-left"
            data-aos-offset="400"
            data-aos-delay="400"
            data-aos-duration="500"   
         >
            <div>
                <h1>We Provide Many Features You Can Use</h1>
                <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                <ul>
                    <li>Powerfull online protection.</li>
                    <li>Internet without borders.</li>
                    <li>Supercharged VPN</li>
                    <li>No specific time limits.</li>
                </ul>
            </div>
        </div>
      </div>
    )
}

export default Features