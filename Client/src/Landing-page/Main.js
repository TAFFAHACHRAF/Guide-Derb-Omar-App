import React from "react";
import box from "./assets/svgs/box.svg"
import five from "./assets/svgs/five.svg"
import "./css/style.css" 
import "./css/style.css.map"


function Main(){
    return(
        <main>
        <div className="planes__container" id="pricing">
        <div className="planes">
            <h1>Choose Your Plan</h1>
            <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            <div className="planes__details">
                    <div 
                        className="details"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        data-aos-duration="1000"   
                    >
                        <div className="">
                                <img src={box} alt="box img" />
                                <h4>Free plan</h4>
                                <ul>
                                    <li>Unlimited Bandwitch</li>
                                    <li>Encrypted Connection</li>
                                    <li>No Traffic Logs</li>
                                    <li>Works on All Devices</li>
                                </ul>
                        </div>
                        <div className="plan__type">
                            <h4>Free</h4>
                            <button>select</button>
                        </div>
                    </div>

                    <div 
                        className="details"
                        data-aos="zoom-in"
                        data-aos-delay="700"
                        data-aos-duration="1000" 
                    >
                    <div className="">
                            <img src={box} alt="box img" />
                            <h4>Standard plan</h4>
                            <ul>
                                <li>Unlimited Bandwitch</li>
                                <li>Encrypted Connection</li>
                                <li>No Traffic Logs</li>
                                <li>Works on All Devices</li>
                            </ul>
                    </div>
                    <div className="plan__type">
                        <h4>$9 / <span>mo</span></h4>
                        <button>select</button>
                    </div>
                </div>

                <div className="details"
                    data-aos="zoom-in"
                    data-aos-delay="900"
                    data-aos-duration="1000"
                >
                <div className="">
                        <img src={box} alt="box img" />
                        <h4>Premium plan</h4>
                        <ul>
                            <li>Unlimited Bandwitch</li>
                            <li>Encrypted Connection</li>
                            <li>No Traffic Logs</li>
                            <li>Works on All Devices</li>
                        </ul>
                </div>
                <div className="plan__type">
                    <h4>$12 / <span>mo</span></h4>
                    <button>select</button>
                </div>
                </div>
                </div>
            </div>
        </div>
        <div className="server__location__container">
            <h1>Huge Global Network of Fast VPN</h1>
            <p>See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.</p>
            <div className="map__location">
            <img src={five} width="100" alt="map location" />
            </div>
        </div>
    </main>
    )
}

export default Main