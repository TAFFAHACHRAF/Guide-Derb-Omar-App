import React from "react";
import logo from "./assets/svgs/logo.svg"
import fb from "./assets/svgs/fb.svg" 
import twitter from "./assets/svgs/twitter.svg"
import instagram from "./assets/svgs/instagram.svg"
import "./css/style.css" 
import "./css/style.css.map"


function Footer(){
    return(
        <footer 
            data-aos="zoom-in"  
            data-aos-delay="50" 
            data-aos-duration="1000"  
            data-aos-mirror="true"
            id="help"
        >
        <div class="subscribe">
            <div>
            <h1>Subscribe Now for Get Special Features!</h1>
            <p>Let's subscribe with us and find the fun.</p>
            </div>
            <div>
                <button>Subscribe Now</button>
            </div>
        </div>
        <div className="footer">
            <div className="section__one">
                <div className="logo-section">
                    <img src={logo} alt="logo" />
                </div>
                <p>
                    <b>LaslesVPN</b> is a private virtual network that has unique features and has high security.
                </p>
                <p className="social-media">
                    <a href="#">
                        <img src={fb} alt="facebook logo" />
                    </a>
                    <a href="https://twitter.com/">
                        <img src={twitter} alt="twitter logo" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="instagram logo" />
                    </a>
                </p>
                <p className="copyright">
                    &copy;2022LaslesVPN
                </p>
            </div>
            <div className="section__two">
                <h3>Product</h3>
                <ul>
                    <li>Download</li>
                    <li>Pricing</li>
                    <li>Locations</li>
                    <li>Server</li>
                    <li>Countries</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="section_three">
                <h3>Engage</h3>
                <ul>
                    <li>LaslesVPN ?</li>
                    <li>FAQ</li>
                    <li>Tutorials</li>
                    <li>About us</li>
                    <li>Privacy Plicy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div className="section__four">
                <h3>Earn Money</h3>
                <ul>
                    <li>Affiliate</li>
                    <li>become Partner</li>
                </ul>
            </div>
        </div>
    </footer>
    )
}

export default Footer